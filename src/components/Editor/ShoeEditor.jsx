import { useParams, useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import useEditor from "../../context/useEditor";
import { getColor } from "../../utils";
import Options from "./Options";
import { getUser } from "../../utils";
import { useDrafts } from "../../hooks/useDrafts";
import toast from "react-hot-toast";
const validRoutes = ["air-jordan-1", "air-jordan-4"];

function ShoeEditor() {
  const navigate = useNavigate();
  const { draftMutation, deleteDraft, allDraftData, updateCurrentDraft } =
    useDrafts();
  const { model, draftId } = useParams();
  const {
    selectedPart,
    setSelectedPart,
    shoeParts,
    setShoePartsColor,
    setCurrentModel,
    currentModel,
    setDraft,
    title,
    setTitle,
    active,
  } = useEditor();
  const titleRef = useRef();
  const id = allDraftData?.length
    ? allDraftData[allDraftData?.length - 1]?.id + 1
    : 1;

  useEffect(() => {
    let invalidMenu = true;
    if (validRoutes.includes(model)) {
      invalidMenu = false;
    }
    if (invalidMenu) {
      navigate("/404", { replace: true });
    }
  }, [model, navigate]);

  useEffect(() => {
    setCurrentModel(model);
    active();
  }, [model, setCurrentModel]);

  useEffect(() => {
    if (draftId) {
      setDraft(draftId);
    }
  }, [draftId, setDraft]);

  const EditorData = {
    title: title,
    model: model,
    parts: shoeParts,
    userId: getUser().user.id,
    imgUrl:
      "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    id: draftId ? id - 1 : id,
  };

  function createDraft() {
    draftMutation(EditorData);
    toast.success("Successfully Created Draft");
    setDraft(id);
    navigate("/editor");
  }

  function updateDraft() {
    updateCurrentDraft(EditorData);
    toast.success("Saved");
  }

  return (
    <div className="relative">
      <input
        className="bg-transparent outline-0 border-0 border- max-w-md font-semibold absolute text-center -top-14 left-0 right-0 m-auto"
        contentEditable
        ref={titleRef}
        value={title}
        onChange={() => {
          setTitle(titleRef.current.value);
        }}
      />

      <div className="grid gap-4 sm:grid-cols-[auto_auto_1fr]">
        <div className="flex flex-col gap-4 px-10 ">
          {shoeParts?.map((shoe, i) => (
            <h3
              key={shoe.name}
              className="cursor-pointer"
              onClick={() => setSelectedPart(i)}
            >
              {shoe.name}
            </h3>
          ))}
        </div>
        <div className="my-auto">
          <div className="">
            <h3 className="text-left">{shoeParts[selectedPart].name}</h3>

            <div className="flex flex-wrap max-w-[250px] gap-4">
              <div
                className="w-8 h-8 bg-red-500"
                onClick={(e) => {
                  getColor(e, setShoePartsColor);
                }}
              ></div>
              <div
                className="w-8 h-8 bg-green-500"
                onClick={(e) => {
                  getColor(e, setShoePartsColor);
                }}
              ></div>
              <div
                className="w-8 h-8 bg-blue-500"
                onClick={(e) => {
                  getColor(e, setShoePartsColor);
                }}
              ></div>
              <div
                className="w-8 h-8 bg-pink-500"
                onClick={(e) => {
                  getColor(e, setShoePartsColor);
                }}
              ></div>
              <div
                className="w-8 h-8 bg-gray-500"
                onClick={(e) => {
                  getColor(e, setShoePartsColor);
                }}
              ></div>
              <div
                className="w-8 h-8 bg-stone-500"
                onClick={(e) => {
                  getColor(e, setShoePartsColor);
                }}
              ></div>
              <div
                className="w-8 h-8 bg-orange-500"
                onClick={(e) => {
                  getColor(e, setShoePartsColor);
                }}
              ></div>
              <div
                className="w-8 h-8 bg-yellow-500"
                onClick={(e) => {
                  getColor(e, setShoePartsColor);
                }}
              ></div>
              <div
                className="w-8 h-8 bg-indigo-500"
                onClick={(e) => {
                  getColor(e, setShoePartsColor);
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="relative m-auto">
          <Options
            save={createDraft}
            del={() => deleteDraft(draftId)}
            update={updateDraft}
            draftId={draftId}
          />
          <h1
            className=""
            style={{ color: `${shoeParts[selectedPart].color}` }}
          >
            {currentModel}
          </h1>
          <div className="flex flex-wrap max-w-md gap-x-4 gap-y-2">
            {shoeParts.map((shoe, i) => (
              <div
                key={shoe.name}
                className={`w-12 h-12 bg-red-400`}
                style={{ background: `${shoeParts[i].color}` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoeEditor;
