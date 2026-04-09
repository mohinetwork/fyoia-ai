"use client";

import Background from "@/components/global/background";
import Wrapper from "@/components/global/wrapper";
import { motion } from "motion/react";

const TermsPage = () => {
    return (
        <div className="w-full min-h-dvh pt-18 relative overflow-hidden">
            <Background />

            <Wrapper className="relative z-10 py-16 lg:py-24">
                <section className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-semibold text-center bg-linear-to-r from-foreground to-foreground/70 text-transparent bg-clip-text"
                    >
                        Terms &amp; Privacy Policy
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-6 text-sm md:text-base text-muted-foreground text-center"
                    >
                        This page explains how Fyoia AI works, what you can expect from us, and how we handle your data.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-10 space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed"
                    >
                        <section>
                            <h2 className="text-lg md:text-xl font-semibold text-foreground">
                                1. Using Fyoia AI
                            </h2>
                            <p className="mt-2">
                                Fyoia AI is an AI platform that lets you generate content, code, images, videos, and voice outputs.
                                By using Fyoia AI, you agree to use the platform responsibly and follow all applicable laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-semibold text-foreground">
                                2. Data You Provide
                            </h2>
                            <p className="mt-2">
                                When you use Fyoia AI, you may provide prompts, files, and other content. We use this input only to
                                generate results for you and to improve the platform&apos;s performance and reliability.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-semibold text-foreground">
                                3. Privacy &amp; Security
                            </h2>
                            <p className="mt-2">
                                We take the security of your data seriously. We do not sell your personal information. Limited
                                service data may be stored for analytics, abuse prevention, and to keep the service running
                                smoothly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-semibold text-foreground">
                                4. Acceptable Use
                            </h2>
                            <p className="mt-2">
                                You agree not to use Fyoia AI for illegal, harmful, or abusive activities. This includes generating
                                content that violates laws, spreads hate, or infringes on the rights of others.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-semibold text-foreground">
                                5. Changes to These Terms
                            </h2>
                            <p className="mt-2">
                                We may update these terms and policies as Fyoia AI evolves. If we make significant changes, we will
                                update this page so you can review the latest version.
                            </p>
                        </section>
                    </motion.div>
                </section>
            </Wrapper>
        </div>
    );
};

export default TermsPage;

