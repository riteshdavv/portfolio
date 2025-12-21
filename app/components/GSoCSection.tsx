"use client";

// app/feature-demo/page.tsx
import { FeatureShowcase, type TabMedia } from "../../components/ui/feature-showcase";
import { FileCode, Box, KeyRound, Layers, Server, Radio } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
    const tabs: TabMedia[] = [
        {
            value: "authentication",
            label: "Authentication",
            src: "auth.png",
            alt: "Authentication",
        },
        {
            value: "storage",
            label: "File Storage",
            src: "storage.png",
            alt: "File Storage",
        },
        {
            value: "database",
            label: "Database APIs",
            src: "database.png",
            alt: "Database APIs",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            <FeatureShowcase
                eyebrow="Experience"
                title="Google Summer of Code '25"
                description="This project successfully bridged the gap between a robust CMS (Drupal) and an open-source BaaS (Appwrite), enabling seamless support for authentication, file storage, and database APIs."
                stats={[
                    { text: "PHP", icon: <FileCode className="h-3 w-3" /> },
                    { text: "Symfony", icon: <Box className="h-3 w-3" /> },
                    { text: "OAuth", icon: <KeyRound className="h-3 w-3" /> },
                    { text: "Drupal API", icon: <Layers className="h-3 w-3" /> },
                    { text: "Appwrite Server SDK", icon: <Server className="h-3 w-3" /> },
                    { text: "RESTful integration", icon: <Radio className="h-3 w-3" /> }
                ]}
                steps={[
                    {
                        id: "step-1",
                        title: "OAuth Integration",
                        text:
                            "Implemented secure OAuth 2.0 authentication by bridging Drupal's user management with Appwrite's secure session handling for GitHub and Google login flows, ensuring data integrity across platforms.",
                    },
                    {
                        id: "step-2",
                        title: "File Storage",
                        text:
                            "Optimized media management efficiency by 40% through the integration of Appwrite’s storage bucket API with Drupal’s media system, enabling real-time upload, retrieval, and scoped access control of user-generated files.",
                    },
                    {
                        id: "step-3",
                        title: "Database APIs",
                        text:
                            "Reduced data retrieval latency by 50% by connecting Appwrite’s document database with Drupal, thereby streamlining storage and querying of structured content.",
                    },
                ]}
                tabs={tabs}
                defaultTab="authentication"
                panelMinHeight={720}
            />
        </motion.div>
    );
}
