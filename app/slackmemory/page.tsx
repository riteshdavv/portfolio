"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

// Typing animation component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                if (index <= text.length) {
                    setDisplayText(text.slice(0, index));
                    index++;
                } else {
                    clearInterval(interval);
                    // Keep cursor blinking after typing completes
                }
            }, 80);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span>
            {displayText}
            <span
                className="inline-block w-0.5 h-4 ml-0.5 -mb-0.5"
                style={{
                    backgroundColor: showCursor ? "#AAAAAA" : "transparent",
                    transition: "background-color 0.1s",
                }}
            />
        </span>
    );
}

export default function SlackMemoryPage() {
    const heroRef = useRef(null);
    const previewRef = useRef(null);
    const featuresRef = useRef(null);
    const stepsRef = useRef(null);
    const benefitsRef = useRef(null);

    const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
    const previewInView = useInView(previewRef, { once: true, margin: "-100px" });
    const featuresInView = useInView(featuresRef, { once: true, margin: "-50px" });
    const stepsInView = useInView(stepsRef, { once: true, margin: "-50px" });
    const benefitsInView = useInView(benefitsRef, { once: true, margin: "-50px" });

    return (
        <div
            className="min-h-screen transition-colors duration-300 overflow-hidden"
            style={{
                backgroundColor: "#FFF5E6",
                color: "#2D241C",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex justify-between items-center px-6 py-5"
            >
                <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <motion.img
                        src="/icon48.png"
                        alt="Slack Memory"
                        className="w-6 h-6"
                        animate={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                    />
                    <span
                        className="font-bold text-xl tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Slack Memory
                    </span>
                </motion.div>
                <motion.div
                    className="font-bold text-lg"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "rgba(157, 114, 56, 0.8)",
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    SM
                </motion.div>
            </motion.nav>

            {/* Main Content */}
            <main className="px-6 pb-12 max-w-lg mx-auto">
                {/* Hero Section */}
                <motion.section
                    ref={heroRef}
                    className="text-center mt-8 mb-10"
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    <motion.h1
                        className="font-bold text-4xl leading-[1.15] mb-4"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: "#4A3728",
                        }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Find client files across workspaces in seconds
                    </motion.h1>
                    <motion.p
                        className="text-lg leading-relaxed mb-8 font-medium"
                        style={{ color: "#6B6B6B" }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        The missing search layer for freelancers. Access all your scattered
                        Slack files in one unified view.
                    </motion.p>
                    <motion.a
                        href="/slackmemory-extension.zip"
                        download="slackmemory-extension.zip"
                        className="w-full font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 text-lg cursor-pointer no-underline"
                        style={{
                            backgroundColor: "#9D7238",
                            color: "white",
                            boxShadow: "0 10px 30px -5px rgba(157, 114, 56, 0.3)",
                        }}
                        variants={fadeInUp}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 15px 40px -5px rgba(157, 114, 56, 0.4)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <motion.span
                            className="material-icons-round text-xl"
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            download
                        </motion.span>
                        Download Extension
                    </motion.a>
                </motion.section>

                {/* Preview Card Section */}
                <motion.section
                    ref={previewRef}
                    className="mb-12 relative"
                    initial="hidden"
                    animate={previewInView ? "visible" : "hidden"}
                    variants={scaleIn}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Animated glow background */}
                    <motion.div
                        className="absolute inset-0 blur-3xl rounded-full transform scale-75"
                        style={{ backgroundColor: "rgba(157, 114, 56, 0.2)" }}
                        animate={{
                            opacity: [0.3, 0.5, 0.3],
                            scale: [0.7, 0.8, 0.7],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="relative rounded-2xl p-5 border"
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderColor: "rgba(157, 114, 56, 0.1)",
                            boxShadow: "0 4px 20px -2px rgba(157, 114, 56, 0.1)",
                        }}
                        whileHover={{
                            boxShadow: "0 8px 30px -2px rgba(157, 114, 56, 0.15)",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Search Bar with typing animation */}
                        <motion.div
                            className="flex items-center gap-3 rounded-xl px-4 py-3 mb-6 border"
                            style={{
                                backgroundColor: "#F9F9F9",
                                borderColor: "#F0F0F0",
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={previewInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <motion.span
                                className="material-icons-round text-xl"
                                style={{ color: "#AAAAAA" }}
                                animate={previewInView ? { rotate: [0, -15, 15, 0] } : {}}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                search
                            </motion.span>
                            <span className="text-sm" style={{ color: "#AAAAAA" }}>
                                {previewInView ? (
                                    <TypewriterText text="invoice_q3_final.pdf..." delay={1000} />
                                ) : (
                                    "invoice_q3_final.pdf..."
                                )}
                            </span>
                        </motion.div>

                        {/* Connect Workspace Card */}
                        <motion.div
                            className="rounded-xl p-4 border flex items-center justify-between mb-6"
                            style={{
                                background: "linear-gradient(to right, #FFFBF5, #FFF5E6)",
                                borderColor: "rgba(157, 114, 56, 0.1)",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={previewInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{
                                        backgroundColor: "rgba(157, 114, 56, 0.1)",
                                        color: "#9D7238",
                                    }}
                                >
                                    <span className="material-icons-round text-xl">link</span>
                                </motion.div>
                                <div>
                                    <p className="font-semibold text-sm">Connect workspace</p>
                                    <p className="text-xs" style={{ color: "#888888" }}>
                                        Sync to start searching
                                    </p>
                                </div>
                            </div>
                            <motion.button
                                className="text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1 cursor-pointer"
                                style={{
                                    backgroundColor: "#9D7238",
                                    color: "white",
                                    boxShadow: "0 2px 8px rgba(157, 114, 56, 0.2)",
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 4px 12px rgba(157, 114, 56, 0.3)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.span
                                    className="material-icons-round text-xs"
                                    animate={{ rotate: [0, 90, 0] }}
                                    transition={{ duration: 0.3 }}
                                >
                                    add
                                </motion.span>
                                Connect
                            </motion.button>
                        </motion.div>

                        {/* File List */}
                        <div className="space-y-3">
                            {/* PDF File */}
                            <motion.div
                                className="flex items-start justify-between p-3 rounded-lg border-b cursor-pointer"
                                style={{ borderColor: "#F0F0F0" }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={previewInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                whileHover={{
                                    backgroundColor: "rgba(157, 114, 56, 0.03)",
                                    x: 4,
                                }}
                            >
                                <div className="flex gap-3">
                                    <motion.div
                                        className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                                        style={{
                                            backgroundColor: "#FEE2E2",
                                            color: "#DC2626",
                                        }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <span className="material-icons-round text-sm">
                                            picture_as_pdf
                                        </span>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-sm font-semibold truncate w-40">
                                            Contract_v2.pdf
                                        </h3>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span
                                                className="text-[10px] uppercase font-bold tracking-wider"
                                                style={{ color: "#AAAAAA" }}
                                            >
                                                Acme Corp
                                            </span>
                                            <span
                                                className="w-1 h-1 rounded-full"
                                                style={{ backgroundColor: "#CCCCCC" }}
                                            ></span>
                                            <span className="text-[10px]" style={{ color: "#AAAAAA" }}>
                                                Sent by Sarah
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <motion.span
                                    className="text-xs font-medium cursor-pointer whitespace-nowrap"
                                    style={{ color: "#9D7238" }}
                                    whileHover={{ scale: 1.05, x: 2 }}
                                >
                                    Open ↗
                                </motion.span>
                            </motion.div>

                            {/* DOCX File */}
                            <motion.div
                                className="flex items-start justify-between p-3 rounded-lg cursor-pointer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={previewInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                whileHover={{
                                    backgroundColor: "rgba(157, 114, 56, 0.03)",
                                    x: 4,
                                }}
                            >
                                <div className="flex gap-3">
                                    <motion.div
                                        className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                                        style={{
                                            backgroundColor: "#DBEAFE",
                                            color: "#2563EB",
                                        }}
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                    >
                                        <span className="material-icons-round text-sm">
                                            description
                                        </span>
                                    </motion.div>
                                    <div>
                                        <h3 className="text-sm font-semibold truncate w-40">
                                            Briefing_Notes.docx
                                        </h3>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span
                                                className="text-[10px] uppercase font-bold tracking-wider"
                                                style={{ color: "#AAAAAA" }}
                                            >
                                                Stark Ind
                                            </span>
                                            <span
                                                className="w-1 h-1 rounded-full"
                                                style={{ backgroundColor: "#CCCCCC" }}
                                            ></span>
                                            <span className="text-[10px]" style={{ color: "#AAAAAA" }}>
                                                Yesterday
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <motion.span
                                    className="text-xs font-medium cursor-pointer whitespace-nowrap"
                                    style={{ color: "#9D7238" }}
                                    whileHover={{ scale: 1.05, x: 2 }}
                                >
                                    Open ↗
                                </motion.span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Feature Cards */}
                <motion.section
                    ref={featuresRef}
                    className="grid grid-cols-3 gap-3 mb-12"
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    {[
                        { icon: "manage_search", text: "Filename & Sender Search" },
                        { icon: "hub", text: "2 Workspaces Included" },
                        { icon: "history", text: "30-Day Auto Sync" },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-2xl text-center border cursor-default"
                            style={{
                                backgroundColor: "#FFFFFF",
                                borderColor: "transparent",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                            }}
                            variants={fadeInUp}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 8px 20px rgba(157, 114, 56, 0.12)",
                                borderColor: "rgba(157, 114, 56, 0.2)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <motion.span
                                className="material-icons-round text-4xl mb-3 block w-6 h-6"
                                style={{ color: "#9D7238" }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                {feature.icon}
                            </motion.span>
                            <p className="text-sm font-semibold leading-snug">
                                {feature.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.section>

                {/* How It Works Section */}
                <motion.section
                    ref={stepsRef}
                    className="mb-12"
                    initial="hidden"
                    animate={stepsInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="font-bold text-2xl mb-6 text-center"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        variants={fadeInUp}
                    >
                        How it works
                    </motion.h2>
                    <div className="space-y-6 relative pl-4">
                        {/* Animated connecting line */}
                        <motion.div
                            className="absolute left-[27px] top-4 w-0.5"
                            style={{ backgroundColor: "#E5E5E5" }}
                            initial={{ height: 0 }}
                            animate={stepsInView ? { height: "calc(100% - 2rem)" } : { height: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        />

                        {[
                            {
                                num: 1,
                                title: "Connect Workspaces",
                                desc: "Securely link your Slack accounts via OAuth. We only read file metadata.",
                            },
                            {
                                num: 2,
                                title: "Sync Files",
                                desc: "We automatically index files from the last 30 days in the background.",
                            },
                            {
                                num: 3,
                                title: "Search & Open",
                                desc: "Type any keyword and jump directly to the file in your Slack app.",
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={step.num}
                                className="relative flex gap-5 items-start"
                                variants={fadeInUp}
                                transition={{ delay: index * 0.15 }}
                            >
                                <motion.div
                                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 z-10 mt-1"
                                    style={{ backgroundColor: "#9D7238", color: "white" }}
                                    initial={{ scale: 0 }}
                                    animate={stepsInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{
                                        delay: 0.3 + index * 0.2,
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 15,
                                    }}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    {step.num}
                                </motion.div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                                    <p className="text-sm" style={{ color: "#6B6B6B" }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* What You Get Section */}
                <motion.section
                    ref={benefitsRef}
                    initial="hidden"
                    animate={benefitsInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-xs font-bold tracking-widest uppercase mb-5"
                        style={{ color: "#888888" }}
                        variants={fadeInUp}
                    >
                        What You Get
                    </motion.h2>
                    <div className="space-y-4">
                        {[
                            "2 workspace connections",
                            "30-day file history",
                            "Manual sync control",
                            "Unlimited instant search",
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-4 cursor-default"
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 8 }}
                            >
                                <motion.div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: "#F2E3CE" }}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={benefitsInView ? { scale: 1, rotate: 0 } : {}}
                                    transition={{
                                        delay: 0.2 + index * 0.1,
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 15,
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                >
                                    <motion.span
                                        className="material-icons-round text-lg"
                                        style={{ color: "#9D7238" }}
                                    >
                                        check
                                    </motion.span>
                                </motion.div>
                                <span className="text-lg font-medium">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Footer */}
                <motion.footer
                    className="mt-16 text-center pb-8 border-t pt-8"
                    style={{ borderColor: "#E5E5E5" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm" style={{ color: "#AAAAAA" }}>
                        © 2026 Slack Memory. Not affiliated with Slack.
                    </p>
                </motion.footer>
            </main>
        </div>
    );
}