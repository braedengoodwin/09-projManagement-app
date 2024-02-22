export default function AddProjectPanel({ buttonClick }) {
  return (
    //"flex justify-center grid-cols-3 gap-4"
    <>
      {buttonClick && (
        <div className="w-full fixed inset-0 flex flex-col items-center justify-center gap-y-4">
          <div className="flex justify-end w-1/3 gap-4">
            <button className="w-20 h-10 rounded-lg hover:bg-black hover:text-white">Cancel</button>
            <button className="w-20 h-10 rounded-lg bg-black text-white hover:bg-slate-500 ">Save</button>
          </div>

          <div className="flex flex-col w-1/3">
            <label className="text-left font-mono">Title</label>
            <input
              type="text"
              placeholder="Field 1"
              className="w-full h-10 border border-gray-300 rounded-md px-2"
            />
          </div>

          <div className="flex flex-col w-1/3">
            <label className="text-left font-mono">Description </label>
            <textarea
              type="text"
              placeholder="Field 1"
              className="w-full h-10 border border-gray-300 rounded-md px-2"
            />
          </div>

          <div className="flex flex-col w-1/3">
            <label className="text-left font-mono">Due Date</label>
            <input
              type="date"
              placeholder="Field 1"
              className="w-full h-10 border border-gray-300 rounded-md px-2"
            />
          </div>
        </div>
      )}
    </>
  );
}
