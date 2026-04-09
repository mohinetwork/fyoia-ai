"use client";

import Background from "@/components/global/background";
import Wrapper from "@/components/global/wrapper";
import { motion } from "motion/react";

const CookiesPage = () => {
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
                        Cookie Policy
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-6 text-sm md:text-base text-muted-foreground text-center"
                    >
                        This Cookie Policy explains how Fyoia AI uses cookies and similar technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-10 space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed"
                    >
                        <section>
                            <h2 className="text-lg md:text-xl font-semibold text-foreground">
                                1. What Are Cookies?
                            </h2>
                            <p className="mt-2">
                                Cookies are small text files stored on your device when you visit a website. They help us remember
                                your preferences and improve how Fyoia AI works.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-semibold text-foreground">
                                2. How We Use Cookies
                            </h2>
                            <p className="mt-2">
                                We use cookies to keep you logged in, remember your settings, measure usage, and improve the
                                performance of Fyoia AI. Some cookies are essential for the app to function correctly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-semibold text-foreground">
                                3. Analytics &amp; Performance
                            </h2>
                            <p className="mt-2">
                                We may use analytics tools to understand how people use Fyoia AI. These tools use cookies to collect
                                usage data in an aggregated and anonymous form.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-semibold text-foreground">
                                4. Managing Cookies
                            </h2>
                            <p className="mt-2">
                                You can control or disable cookies in your browser settings. However, if you block certain cookies,
                                some features of Fyoia AI may not work properly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-semibold text-foreground">
                                5. Updates to This Policy
                            </h2>
                            <p className="mt-2">
                                We may update this Cookie Policy from time to time. When we do, we will update the date on this page
                                so you can review the latest version.
                            </p>
                        </section>
                    </motion.div>
                </section>
            </Wrapper>
        </div>
    );
};

export default CookiesPage;

