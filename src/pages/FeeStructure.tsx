import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { IndianRupee, Info } from "lucide-react";

const feeSections = [
  {
    title: "Pre-Primary (PG to UKG)",
    total: "22,900",
    admissionPay: "11,200",
    data: [
      { label: "Registration Fee", amount: "1000" },
      { label: "Admission Fee", amount: "3000" },
      { label: "ID Card, Belt, Diary", amount: "500" },
      { label: "Activities & Misc", amount: "2000" },
      { label: "Exam Fee", amount: "2000" },
      { label: "Tuition Fee (Monthly)", amount: "1200" },
    ],
  },
  {
    title: "Primary (Class 1st to 5th)",
    total: "27,000",
    admissionPay: "12,500",
    data: [
      { label: "Registration Fee", amount: "1000" },
      { label: "Admission Fee", amount: "3000" },
      { label: "ID Card, Belt, Diary", amount: "500" },
      { label: "Activities & Misc", amount: "2500" },
      { label: "Exam Fee", amount: "2000" },
      { label: "Tuition Fee (Monthly)", amount: "1500" },
    ],
  },
  {
    title: "Middle (Class 6th to 8th)",
    total: "29,300",
    admissionPay: "14,500",
    data: [
      { label: "Registration Fee", amount: "1000" },
      { label: "Admission Fee", amount: "3500" },
      { label: "ID Card, Belt, Diary", amount: "500" },
      { label: "Activities & Misc", amount: "2500" },
      { label: "Exam Fee", amount: "2000" },
      { label: "Tuition Fee (Monthly)", amount: "1650" },
    ],
  },
  {
    title: "Secondary (Class 9th to 10th)",
    total: "35,500",
    admissionPay: "14,400",
    data: [
      { label: "Registration Fee", amount: "1000" },
      { label: "Admission Fee", amount: "5000" },
      { label: "ID Card, Belt, Diary", amount: "500" },
      { label: "Activities & Misc", amount: "3000" },
      { label: "Exam Fee", amount: "3000" },
      { label: "Tuition Fee (Monthly)", amount: "2000" },
    ],
  },
];

const FeeStructure = () => (
  <Layout>
    <PageHero
      title="Fee Structure"
      subtitle="Transparent and affordable education"
      breadcrumb="Fee Structure"
    />

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl space-y-10">

        {feeSections.map((section, idx) => (
          <AnimatedSection key={idx}>
            <div className="bg-card rounded-2xl border border-border shadow-lg p-6">

              <h2 className="text-xl font-bold text-primary mb-4">
                {section.title}
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {section.data.map((item, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="p-3 text-muted-foreground">{item.label}</td>
                        <td className="p-3 text-right flex justify-end items-center gap-1">
                          <IndianRupee className="w-3 h-3" />
                          {item.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total */}
              <div className="mt-4 pt-4 border-t border-border flex justify-between font-semibold text-primary">
                <span>Total Yearly Fee</span>
                <span>₹{section.total}</span>
              </div>

              {/* Admission */}
              <div className="mt-2 flex justify-between text-sm text-secondary font-medium">
                <span>Payable at Admission</span>
                <span>₹{section.admissionPay}</span>
              </div>

            </div>
          </AnimatedSection>
        ))}

        {/* Terms */}
        <AnimatedSection delay={0.2}>
  <div className="bg-cream rounded-xl p-6 flex gap-4">
    
    <Info className="w-6 h-6 text-secondary mt-1 shrink-0" />

    <div className="text-sm text-muted-foreground space-y-3">
      
      <h3 className="font-semibold text-primary text-base">
        Terms & Conditions
      </h3>

      <ul className="list-disc pl-5 space-y-1">
        <li>
          All annual charges must be paid along with the first installment of tuition fees.
        </li>
        <li>
          The school fee can be paid in four convenient installments.
        </li>
        <li>
          Installment schedule: <span className="font-medium text-foreground">
            April, July, October, and January
          </span>.
        </li>
        <li>
          Accepted payment modes include Cash, Cheque, Bank Transfer, and UPI 
          (PhonePe, Google Pay, Paytm).
        </li>
        <li>
          A late fee of <span className="font-medium text-foreground">₹10 per day</span> 
          will be applicable for delayed payments.
        </li>
        <li>
          All fees once paid are non-refundable under any circumstances.
        </li>
      </ul>

    </div>
  </div>
</AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default FeeStructure;