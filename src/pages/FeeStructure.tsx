import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { IndianRupee, Info } from "lucide-react";

const feeData = [
  { class: "Nursery – UKG", admission: "15,000", tuition: "2,500/month", annual: "5,000" },
  { class: "Class I – V", admission: "18,000", tuition: "3,000/month", annual: "6,000" },
  { class: "Class VI – VIII", admission: "20,000", tuition: "3,500/month", annual: "7,000" },
  { class: "Class IX – X", admission: "22,000", tuition: "4,000/month", annual: "8,000" },
  { class: "Class XI – XII", admission: "25,000", tuition: "4,500/month", annual: "9,000" },
];

const FeeStructure = () => (
  <Layout>
    <PageHero title="Fee Structure" subtitle="Transparent and affordable education" breadcrumb="Fee Structure" />
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-4 font-heading">Class</th>
                    <th className="text-left p-4 font-heading">Admission Fee</th>
                    <th className="text-left p-4 font-heading">Tuition Fee</th>
                    <th className="text-left p-4 font-heading">Annual Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((f, i) => (
                    <tr key={f.class} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                      <td className="p-4 font-semibold text-foreground">{f.class}</td>
                      <td className="p-4 text-sm text-muted-foreground flex items-center gap-1"><IndianRupee className="w-3 h-3" />{f.admission}</td>
                      <td className="p-4 text-sm text-muted-foreground">₹{f.tuition}</td>
                      <td className="p-4 text-sm text-muted-foreground">₹{f.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="bg-cream rounded-xl p-6 mt-8 flex items-start gap-3">
            <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground space-y-1">
              <p>* Fee structure is indicative and subject to revision. Please contact the school office for exact details.</p>
              <p>* Transportation and hostel fees are separate and depend on the distance/facility availed.</p>
              <p>* Scholarships available for meritorious and economically weaker students.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default FeeStructure;