import React from "react";

const GeneralTerms = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">General Terms</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Waiting Period:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>For Pre-Existing Diseases - 12 months</li>
          <li>For Specific Diseases/Procedures - 24 months</li>
          <li>Initial Waiting Period - 30 days (Except for Accidents)</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Dedicated Senior Citizens Claims & Grievances:
        </h3>
        <p>
          Policyholders who have complaints against insurers are required to
          first approach the Complaints/Grievance Redressal Cell of the insurer
          by visiting{" "}
          <a
            href="https://www.Caresurehealth.in/grievance-redressal"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.Caresurehealth.in/grievance-redressal
          </a>
          .
        </p>
        <p className="mt-2">
          Email:{" "}
          <a
            href="mailto:gro@Caresurehealth.in"
            className="text-blue-500 underline"
          >
            gro@Caresurehealth.in
          </a>{" "}
          or{" "}
          <a
            href="mailto:grievances@Caresurehealth.in"
            className="text-blue-500 underline"
          >
            grievances@Caresurehealth.in
          </a>
        </p>
        <p className="mt-2">
          If they do not receive a response from the insurer within a reasonable
          period or are dissatisfied with the response of the company, contact
          the Integrated Grievance Management System(IGMS) - IRDAI Portal at{" "}
          <a
            href="https://igms.irda.gov.in"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://igms.irda.gov.in
          </a>{" "}
          for registering the complaints. Email to{" "}
          <a
            href="mailto:complaints@irdai.gov.in"
            className="text-blue-500 underline"
          >
            complaints@irdai.gov.in
          </a>
          .
        </p>
        <p className="mt-2">
          You can also call Toll Free No. 155255 or 1800 4254 732.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">
          Pre-Acceptance Medical Screening:
        </h3>
        <p>
          There is no pre-acceptance medical screening. However, if the
          following medical records of the person proposed for insurance are
          submitted, a discount of 10% is allowed.
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Stress Thallium Report</li>
          <li>BP Report</li>
          <li>Sugar (blood & urine) (Fasting / Postprandial)</li>
          <li>Blood urea & creatinine</li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Free Look Period:</h3>
        <p>
          At the time of inception of the policy, the Insured will be allowed a
          period of 15 days from the date of receipt of the policy to review the
          terms and conditions of the policy and to return the policy if not
          acceptable. In such a case, the premium refund shall be as follows:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            If the Insured has not made any claim during the free look period,
            the Insured shall be entitled to –
          </li>
          <li>
            a refund of the premium paid less any expenses incurred by the
            Insurer on medical examination of the insured persons and the stamp
            duty charges, or
          </li>
          <li>
            where the risk has already commenced and the option of return of the
            policy is exercised by the policy holder, a deduction towards the
            proportionate risk premium for the period on cover, or
          </li>
          <li>
            where only a part of the insurance coverage has commenced, such
            proportionate premium commensurate with the insurance coverage
            during such period.
          </li>
        </ul>
        <p className="mt-2">
          Free look period shall not be applicable at the time of renewal.
        </p>
      </div>
      <p className="mt-6 text-sm">
        Note: Renewal premium, terms, and conditions are subject to change with
        prior approval from IRDAI.
      </p>
    </div>
  );
};

export default GeneralTerms;
