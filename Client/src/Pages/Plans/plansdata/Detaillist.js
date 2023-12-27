import React from "react";

const Detaillist = () => {
  return (
    <div className="bg-white shadow-md sm:rounded-lg p-4 m-4">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <div className="text-blue-600 font-bold my-3">DETAILED LIST</div>
        <div className="font-bold my-1 text-5xl">Understand whats included</div>
      </div>
      <div className="font-semibold my-1 text-lg">IMPORTANT HIGHLIGHTS</div>
      <table className="w-full text-sm text-left text-gray-500 border border-[bg-gray-100] border-x-4">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 py-2">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                In-Patient Hospitalisation
              </div>
              <div className="text-gray-700 mt-1">
                Hospitalisation expenses incurred for a period of more than 24
                hours on account of illness, injury or accidents are covered.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">Policy Term</div>
              <div className="text-gray-700 mt-1">
                This policy can be availed for a term of one, two, or three
                years.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Pre-Medical Examination
              </div>
              <div className="text-gray-700 mt-1">
                No pre-acceptance medical screening is required to avail this
                policy. However, pregnant women need to submit their scan
                reports taken at Caresure Health specified scan centres during
                the 12th and 20th week of their pregnancy. The incurred costs of
                such a scan need to be borne by the insured.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                Individual Entry Age
              </div>
              <div className="text-gray-700 mt-1">
                Only female individuals aged between 18 and 75 years can avail
                this policy as Individual Sum Insured.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Floater Entry Age
              </div>
              <div className="text-gray-700 mt-1">
                To avail the Floater Sum Insured there should be at least one
                female adult in the family aged between 18 and 75 years. This
                policy covers a maximum of up to three dependent children from
                91 days to 25 years. Under this policy, the insured's daughter
                can continue to be covered max up to 30 years of age, if she is
                unmarried and/or unemployed.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">Sum Insured</div>
              <div className="text-gray-700 mt-1">
                The Sum Insured options under this policy are Rs.5,00,000/-,
                Rs.10,00,000/-, Rs.15,00,000/-, Rs.20,00,000/- , Rs.25,00,000/-,
                Rs.50,00,000/- and Rs.1,00,00,000/-.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                In-Patient Hospitalisation
              </div>
              <div className="text-gray-700 mt-1">
                Hospitalisation expenses incurred for a period of more than 24
                hours on account of  illness, injury or accidents are covered.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                Pre-Hospitalisation
              </div>
              <div className="text-gray-700 mt-1">
                In addition to in-patient hospitalisation, the medical expenses
                incurred up to 60 days before the date of admission to the
                hospital are also covered.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Post-Hospitalisation
              </div>
              <div className="text-gray-700 mt-1">
                Post-hospitalisation medical expenses up to 90 days from the
                date of discharge from the hospital are covered.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">Room Rent</div>
              <div className="text-gray-700 mt-1">
                Room, boarding and nursing expenses incurred during in-patient
                hospitalisation are covered up to 1% of the Sum Insured per day
                for Rs. 5 lakh Sum Insured; any room (except suite or above
                category) for Rs. 10/15/20/25 lakh Sum Insured options, and any
                room for Rs. 50/100/ lakh Sum Insured options.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">Road Ambulance</div>
              <div className="text-gray-700 mt-1">
                This policy covers ambulance charges for admission in hospital,
                for shifting from one hospitals to another for better medical
                treatment and from hospital to residence.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">Air Ambulance</div>
              <div className="text-gray-700 mt-1">
                Air ambulance expenses are covered up to 10% of the Sum Insured
                for the entire policy period.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Modern Treatment
              </div>
              <div className="text-gray-700 mt-1">
                Expenses incurred for modern treatments such as Oral
                Chemotherapy, Intra Vitreal injections, Robotic Surgeries, etc.
                are covered up to the limits mentioned in the policy clause.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                AYUSH Treatment
              </div>
              <div className="text-gray-700 mt-1">
                In patient hospitalisation expenses incurred for the treatment
                under Ayurveda, Unani, Sidha and Homeopathy systems of medicines
                in AYUSH hospitals are covered up to the Sum Insured.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Day Care Procedures
              </div>
              <div className="text-gray-700 mt-1">
                Medical treatments and surgical procedures that require less
                than 24 hours of hospitalisation due to technological
                advancements are covered.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                Caresure Mother Cover
              </div>
              <div className="text-gray-700 mt-1">
                Covers the expenses of a Single Private A/c Room for the stay of
                the mother in the hospital if the insured person is a child of
                age less than 12 years, provided the child is treated in ICU and
                there is an admissible claim for hospitalisation
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Shared Accommodation
              </div>
              <div className="text-gray-700 mt-1">
                Expenses incurred on occupying a shared accommodation by the
                insured person are covered up to the limits mentioned in the
                policy clause.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                Rehabilitation & Pain Management
              </div>
              <div className="text-gray-700 mt-1">
                Expenses incurred for Rehabilitation and Pain Management are
                covered up to the specified sub-limit or maximum up to 10% of
                the Sum Insured whichever is less, per policy year.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Organ Donor Expenses
              </div>
              <div className="text-gray-700 mt-1">
                In-patient hospitalisation expenses incurred for organ
                transplantation from the Donor to the recipient insured person
                are payable provided the claim for transplantation is payable.
                In addition, the expenses incurred by the Donor, (if any) for
                the complications that necessitate a Redo Surgery / ICU
                admission will be covered.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                In Utero Fetal Surgery / Repair
              </div>
              <div className="text-gray-700 mt-1">
                Expenses incurred for In Utero Fetal surgeries and procedures
                mentioned in this policy are covered with a waiting period.
                However, the waiting period will not apply for treatment related
                to congenital disease/defects for the new born.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Voluntary Sterilisation Expenses
              </div>
              <div className="text-gray-700 mt-1">
                Expenses incurred for Voluntary Sterilisation (Tubectomy /
                Vasectomy) are covered after a waiting period, provided if the
                insured person is married and he/she is 22 years and above.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                Miscarriage due to Accident
              </div>
              <div className="text-gray-700 mt-1">
                Lump Sum is provided for miscarriage arising due to an accident
                as per the limits of the policy, subject to a waiting period.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Coverage for Non-medical Items
              </div>
              <div className="text-gray-700 mt-1">
                If there is an admissible claim under the policy, then
                non-medical items specified in this policy will become payable.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                Outpatient Consultations
              </div>
              <div className="text-gray-700 mt-1">
                Expenses incurred on medical consultations as an outpatient are
                covered up to the limits as mentioned in the policy.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Preventive Health Check Up
              </div>
              <div className="text-gray-700 mt-1">
                Health check-up expenses incurred for the tests mentioned in the
                policy document are covered for every policy year up to the
                specified limits.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                Automatic Restoration of Sum Insured
              </div>
              <div className="text-gray-700 mt-1">
                On partial or full utilisation of the Sum Insured during the
                policy period, 100% of the Sum Insured will be restored once in
                the same policy year that can be utilised for all claims and
                subsequent hospitalisation.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Preventive Health Check Up
              </div>
              <div className="text-gray-700 mt-1">
                Health check-up expenses incurred for the tests mentioned in the
                policy document are covered for every policy year up to the
                specified limits.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                Automatic Restoration of Sum Insured
              </div>
              <div className="text-gray-700 mt-1">
                On partial or full utilisation of the Sum Insured during the
                policy period, 100% of the Sum Insured will be restored once in
                the same policy year that can be utilised for all claims and
                subsequent hospitalisation.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Cumulative Bonus
              </div>
              <div className="text-gray-700 mt-1">
                Cumulative bonus is provided at 20% of the Sum Insured for each
                claim-free year subject to a maximum of 100% of the Sum Insured.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                Caresure Wellness Program
              </div>
              <div className="text-gray-700 mt-1">
                Wellness program designed to motivate and encourage the healthy
                lifestyle of the insured person through various wellness
                activities. In addition, the earned wellness bonus points can be
                utilised for availing renewal discounts.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#E8E8E8]"
            >
              <div className="font-medium text-[18px] my-1">
                Long-Term discount
              </div>
              <div className="text-gray-700 mt-1">
                Avail 10% discount on 2nd year premium and 11.25% on 2nd and 3rd
                year premium.
              </div>
            </th>
          </tr>
          <tr className="border-b">
            <th
              scope="row"
              colSpan="5" // Add this colspan attribute to make it span all columns
              className="px-6 py-4 font-medium text-gray-900 bg-[#FAFAFA]"
            >
              <div className="font-medium text-[18px] my-1">
                Instalment Options
              </div>
              <div className="text-gray-700 mt-1">
                The policy premium can be paid on a quarterly or half-yearly
                basis. It can also be paid on an annual, biennial (once in 2
                years) and triennial (once in 3 years) basis.
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detaillist;
