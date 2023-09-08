import { useNavigate } from "react-router";
import useEditor from "../../context/useEditor";
function DraftCard({ draft }) {
  const { setDraft, setShoeParts, active, setTitle } = useEditor();
  const navigate = useNavigate();
  function setEditorData() {
    setTitle(draft.title);
    setDraft(draft?.id);
    setShoeParts(draft?.parts);
    active();
    navigate(`/editor/${draft.model}/${draft.id}`);
  }
  return (
    <div
      className="flex flex-col gap-3 p-6 rounded-md shadow-lg cursor-pointer bg-stone-200 dark:bg-slate-800"
      onClick={setEditorData}
    >
      <img
        src={draft.imgUrl}
        alt=""
        className="object-cover w-48 rounded-md h-36"
      />
      <div className="space-y-2">
        {" "}
        <h6 className="font-semibold max-w-[20ch]">{draft.title}</h6>
        <p className="text-xs">{draft.model}</p>
      </div>
    </div>
  );
}

export default DraftCard;
