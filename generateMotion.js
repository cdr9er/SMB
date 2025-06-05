export const motionTemplate = ({
  court = "EIGHTEENTH",
  county = "SEMINOLE",
  caseNumber = "2024-DR-000085",
  petitioner = "COREY ROUN",
  respondent = "EMILY ADAMS",
  petitionerAddress = "123 Main Street, Maitland, FL 32751",
  petitionerPhone = "(407) 619-8026",
  petitionerEmail = "coreyroun@gmail.com",
  children = "Theo Roun, Holden Roun, and Landon Roun",
  relocationDate = "June 3, 2025",
  today = "June 5, 2025",
  respondentEmail = "[Insert Respondent’s Email]",
  respondentAddress = "[Insert Respondent’s Address]",
}) => {
  return `
    <div style="text-align: center; font-weight: bold;">
      IN THE CIRCUIT COURT OF THE ${court.toUpperCase()} JUDICIAL CIRCUIT<br/>
      IN AND FOR ${county.toUpperCase()} COUNTY, FLORIDA
    </div>
    <div style="text-align: right; font-weight: bold;">
      FAMILY LAW DIVISION<br/>
      CASE NO: ${caseNumber}
    </div>
    <div style="margin-top: 20px;">
      ${petitioner.toUpperCase()},<br/>
      Petitioner,<br/>
      v.<br/>
      ${respondent.toUpperCase()},<br/>
      Respondent.
    </div>
    <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-top: 20px;">
      EMERGENCY MOTION FOR TEMPORARY INJUNCTION<br/>
      TO DENY OR DEFER REMOVAL OF MINOR CHILDREN FROM THE STATE OF FLORIDA
    </div>
    <p>COMES NOW the Petitioner, ${petitioner}, pro se, and hereby files this Emergency Motion for Temporary Injunction to Deny or Defer Removal of the Minor Children from the State of Florida, and as grounds therefor states the following:</p>
    <ol>
      <li>On or about ${relocationDate}, Petitioner became aware that Respondent, ${respondent}, intends to relocate the minor children—${children}—to the State of Georgia.</li>
      <li>Respondent has not filed a Petition for Relocation as required by §61.13001, Florida Statutes, nor has she obtained consent from the Petitioner or permission from this Court to remove the children from the jurisdiction.</li>
      <li>Respondent’s attempt to unilaterally relocate the children is in violation of Florida law and may result in irreparable harm, including but not limited to:
        <ul>
          <li>Destabilization of the children’s current living arrangements;</li>
          <li>Interruption of educational and medical continuity;</li>
          <li>Emotional and psychological stress due to abrupt change in environment and separation from the Petitioner.</li>
        </ul>
      </li>
      <li>Petitioner is deeply concerned that Respondent may imminently and unlawfully remove the children from the jurisdiction of this Court, thereby frustrating the Court’s ability to maintain proper oversight and protect the children’s best interests.</li>
      <li>Immediate injunctive relief is necessary to preserve the status quo and prevent irreparable harm until a proper hearing can be held.</li>
    </ol>
    <p>WHEREFORE, Petitioner respectfully requests this Honorable Court to:</p>
    <ul>
      <li>A. Grant an emergency temporary injunction prohibiting Respondent from removing the minor children from the State of Florida without prior Court approval;</li>
      <li>B. Schedule an expedited hearing on this matter to determine appropriate relief; and</li>
      <li>C. Grant such other and further relief as this Court deems just and proper under the circumstances.</li>
    </ul>
    <p>Respectfully submitted this ${today}.</p>
    <p>/s/ ${petitioner}<br/>
    ${petitioner}, Pro Se<br/>
    ${petitionerAddress}<br/>
    Phone: ${petitionerPhone}<br/>
    Email: ${petitionerEmail}</p>
    <p style="font-weight: bold;">CERTIFICATE OF SERVICE</p>
    <p>I HEREBY CERTIFY that a true and correct copy of the foregoing Emergency Motion for Temporary Injunction was served upon the Respondent, ${respondent}, via email at ${respondentEmail} and/or by U.S. Mail at ${respondentAddress}, on this ${today}.</p>
    <p>/s/ ${petitioner}<br/>
    ${petitioner}, Pro Se</p>
  `;
};
