import { useState } from 'react';
import { generateMotion } from './generateMotion';

export default function App() {
  const [laymanText, setLaymanText] = useState('');
  const [motionType, setMotionType] = useState('');
  const [generatedMotion, setGeneratedMotion] = useState('');
  const [caseInfo, setCaseInfo] = useState({
    court: 'EIGHTEENTH',
    county: 'SEMINOLE',
    caseNo: '',
    petitioner: '',
    respondent: '',
    petitionerAddress: '',
    petitionerPhone: '',
    petitionerEmail: '',
    children: '',
    relocationDate: '',
    respondentEmail: '',
    respondentAddress: '',
  });

  const handleGenerate = async () => {
    const motion = await generateMotion(laymanText, motionType, caseInfo);
    setGeneratedMotion(motion);
  };

  return (
    <div className="p-6 font-sans max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Smart Motion Builder</h1>

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

      <div className="mb-6 grid grid-cols-2 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Court (e.g., EIGHTEENTH)"
          value={caseInfo.court}
          onChange={(e) => setCaseInfo({ ...caseInfo, court: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="County (e.g., SEMINOLE)"
          value={caseInfo.county}
          onChange={(e) => setCaseInfo({ ...caseInfo, county: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Case Number"
          value={caseInfo.caseNo}
          onChange={(e) => setCaseInfo({ ...caseInfo, caseNo: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Petitioner Name"
          value={caseInfo.petitioner}
          onChange={(e) => setCaseInfo({ ...caseInfo, petitioner: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Respondent Name"
          value={caseInfo.respondent}
          onChange={(e) => setCaseInfo({ ...caseInfo, respondent: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Children (comma separated)"
          value={caseInfo.children}
          onChange={(e) => setCaseInfo({ ...caseInfo, children: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Relocation Date (e.g., June 3, 2025)"
          value={caseInfo.relocationDate}
          onChange={(e) => setCaseInfo({ ...caseInfo, relocationDate: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Petitioner Address"
          value={caseInfo.petitionerAddress}
          onChange={(e) => setCaseInfo({ ...caseInfo, petitionerAddress: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Petitioner Phone"
          value={caseInfo.petitionerPhone}
          onChange={(e) => setCaseInfo({ ...caseInfo, petitionerPhone: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Petitioner Email"
          value={caseInfo.petitionerEmail}
          onChange={(e) => setCaseInfo({ ...caseInfo, petitionerEmail: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Respondent Email"
          value={caseInfo.respondentEmail}
          onChange={(e) => setCaseInfo({ ...caseInfo, respondentEmail: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Respondent Address"
          value={caseInfo.respondentAddress}
          onChange={(e) => setCaseInfo({ ...caseInfo, respondentAddress: e.target.value })}
        />
      </div>

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        onClick={handleGenerate}
      >
        Generate Motion
      </button>

      {generatedMotion && (
  <div className="mt-6">
    <h2 className="text-xl font-bold mb-2">Generated Motion:</h2>
    <div
      id="motionContent"
      className="whitespace-pre-wrap border p-4 rounded bg-gray-50"
      dangerouslySetInnerHTML={{ __html: generatedMotion }}
    />
    <button
      className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      onClick={() => {
        const el = document.getElementById('motionContent');
        html2pdf().set({ filename: 'Motion.pdf' }).from(el).save();
      }}
    >
      Download PDF
    </button>
  </div>
)}
