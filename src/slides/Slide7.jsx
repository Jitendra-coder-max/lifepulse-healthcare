import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footnotes from "../popups/Footnotes";
import References from "../popups/References";

const Slide7 = ({ onNavigate }) => {
    const [showFootnotes, setShowFootnotes] = useState(false);
    const [showReferences, setShowReferences] = useState(false);

    const rows = [
        ["SB-101", "Cohort1", "220 mg/d", "185 mg/d", "-35 mg/d", "Mild"],
        ["SB-102", "Control", "198 mg/d", "201 mg/d", "+3 mg/d", "Fatigue noted"],
        ["SB-103", "Cohort1", "245 mg/d", "210 mg/d", "-35 mg/d", "None"],
        ["SB-104", "Control", "230 mg/d", "228 mg/d", "-2 mg/d", "None"],
        ["SB-105", "Cohort1", "260 mg/d", "218 mg/d", "-42 mg/d", "Dry mouth"],
        ["SB-106", "Control", "215 mg/d", "217 mg/d", "+2 mg/d", "None"],
        ["SB-107", "Cohort1", "238 mg/d", "196 mg/d", "-42 mg/d", "None"],
        ["SB-108", "Control", "225 mg/d", "224 mg/d", "0 mg/d", "None"],
        ["SB-109", "Cohort1", "255 mg/d", "207 mg/d", "-48 mg/d", "None"],
        ["SB-110", "Control", "210 mg/d", "212 mg/d", "+2 mg/d", "None"],
    ];

    return (
        <main className="relative mx-auto h-[768px] w-[1024px] overflow-hidden bg-[#f3f3f3]">

            {/* Header / Navigation */}
            <Header onNavigate={onNavigate} />

            {/* Main Content */}
            <section className="absolute left-0 top-[82px] h-[606px] w-full px-[40px]">

                {/* Title */}
                <h1 className="absolute left-[40px] top-[42px] text-[20px] font-bold text-[#315779]">
                    Aggregate Outcome Field Notes
                </h1>

                {/* Table */}
                <div className="absolute left-[40px] top-[88px] w-[900px] overflow-hidden rounded-[3px] border border-[#d0d0d0]">

                    <table className="w-full border-collapse text-[12px]">

                        {/* Table Header */}
                        <thead>
                            <tr className="h-[36px] bg-[#102c52] text-white">
                                <th className="w-[135px] px-[14px] text-left font-semibold">
                                    SUBJECT NR
                                </th>

                                <th className="w-[135px] px-[14px] text-left font-semibold">
                                    GRP
                                </th>

                                <th className="w-[135px] px-[14px] text-left font-semibold">
                                    INITIAL DOSE
                                </th>

                                <th className="w-[135px] px-[14px] text-left font-semibold">
                                    FINAL SCORE
                                </th>

                                <th className="w-[135px] px-[14px] text-left font-semibold">
                                    DELTA
                                </th>

                                <th className="px-[14px] text-left font-semibold">
                                    OBSERVED NOTES
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {rows.map((row, index) => {
                                const delta = row[4];
                                const isNegative = delta.startsWith("-");
                                const isPositive = delta.startsWith("+");

                                return (
                                    <tr
                                        key={index}
                                        className={`h-[38px] border-b border-[#d4d4d4] ${index % 2 === 0
                                                ? "bg-white"
                                                : "bg-[#f7f7f9]"
                                            }`}
                                    >
                                        <td className="px-[14px] text-[#333]">
                                            {row[0]}
                                        </td>

                                        <td className="px-[14px] text-[#333]">
                                            {row[1]}
                                        </td>

                                        <td className="px-[14px] text-[#333]">
                                            {row[2]}
                                        </td>

                                        <td className="px-[14px] text-[#333]">
                                            {row[3]}
                                        </td>

                                        <td
                                            className={`px-[14px] font-medium ${isNegative
                                                    ? "text-[#e6333b]"
                                                    : isPositive
                                                        ? "text-[#315779]"
                                                        : "text-[#315779]"
                                                }`}
                                        >
                                            {row[4]}
                                        </td>

                                        <td className="px-[14px] text-[#333]">
                                            {row[5]}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>

                {/* Description / Paragraph */}
                <p className="absolute left-[40px] top-[510px] w-[900px] text-[12px] leading-[1.55] text-[#315779]">
                    È universalmente riconosciuto che un lettore che osserva il
                    layout di una pagina viene distratto dal contenuto testuale
                    se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum
                    è che offre una normale distribuzione delle lettere (al contrario
                    di quanto avviene se si utilizzano brevi frasi ripetute, ad
                    esempio “testo qui”), apparendo come un normale blocco di testo
                    leggibile. Molti software di impaginazione e di web design
                    utilizzano Lorem Ipsum come testo modello.
                </p>

            </section>

            {/* Footer */}
            <Footer
                onReferences={() => setShowReferences(true)}
                onFootnotes={() => setShowFootnotes(true)}
            />

            {/* Footnotes */}
            {showFootnotes && (
                <Footnotes
                    onClose={() => setShowFootnotes(false)}
                />
            )}

            {/* References */}
            {showReferences && (
                <References
                    onClose={() => setShowReferences(false)}
                />
            )}

        </main>
    );
};

export default Slide7;