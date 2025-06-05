import { useState } from 'react';
import { generateMotion } from './generateMotion';

export default function App() {
  const [laymanText, setLaymanText] = useState('');
  const [motionType, setMotionType] = useState('');
  const [generatedMotion, setGeneratedMotion] = useState('');
  const [caseInfo, setCaseInfo] = useState({
    court: "IN THE CIRCUIT COURT OF THE EIGHTEENTH JUDICIAL CIRCUIT",
    county: "SEMINOLE", // Default can be overwritten
    caseNo: "",
    petitioner: "",
    respondent: "",
  });

  const handleGenerate = async () => {
    const motion = await generateMotion(laymanText, motionType, caseInfo);
    setGeneratedMotion(motion);
  };

  return (
    <div className="p-6 font-sans max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Smart Motion Builder</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium">Layman Description:</label>
        <textarea
          className="w-full border p-2 rounded"
          rows="4"
          value={laymanText}
          onChange={(e) => setLaymanText(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Motion Type (optional):</label>
        <input
          className="w-full border p-2 rounded"
          value={motionType}
          onChange={(e) => setMotionType(e.target.value)}
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <input
          className="border p-2 rounded"
          placeholder="Case Number"
          value={caseInfo.caseNo}
          onChange={(e) => setCaseInfo({ ...caseInfo, caseNo: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="County (e.g., SEMINOLE)"
          value={caseInfo.county}
          onChange={(e) => setCaseInfo({ ...caseInfo, county: e.target.value.toUpperCase() })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Petitioner"
          value={caseInfo.petitioner}
          onChange={(e) => setCaseInfo({ ...caseInfo, petitioner: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Respondent"
          value={caseInfo.respondent}
          onChange={(e) => setCaseInfo({ ...caseInfo, respondent: e.target.value })}
        />
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleGenerate}
      >
        Generate Motion
      </button>

      {generatedMotion && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Generated Motion:</h2>
          <pre className="whitespace-pre-wrap border p-4 rounded bg-gray-50">
            {generatedMotion}
          </pre>
        </div>
      )}
    </div>
  );
}
