"use client";

import Background from "@/components/global/background";
import Wrapper from "@/components/global/wrapper";
import { motion } from "motion/react";

const SupportPage = () => {
    return (
        <div className="w-full min-h-dvh pt-18 relative overflow-hidden">
            <Background />

            <Wrapper className="relative z-10 py-16 lg:py-24">
                <section className="max-w-3xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-semibold bg-linear-to-r from-foreground to-foreground/70 text-transparent bg-clip-text"
                    >
                        Support Center
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-sm md:text-base text-muted-foreground"
                    >
                        Need help with Fyoia AI? We're here to assist you.
                    </motion.p>
                </section>

                <section className="max-w-4xl mx-auto mt-12 grid gap-6 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-xl p-6 text-left"
                    >
                        <h2 className="text-lg md:text-xl font-semibold text-foreground">
                            Account Support
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Get help with login issues, account settings, and profile management.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-xl p-6 text-left"
                    >
                        <h2 className="text-lg md:text-xl font-semibold text-foreground">
                            Billing &amp; Pricing
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Questions about subscriptions, pricing plans, or payments.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-xl p-6 text-left"
                    >
                        <h2 className="text-lg md:text-xl font-semibold text-foreground">
                            Technical Issues
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Facing a bug or error? Contact us and we will help resolve it.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-xl p-6 text-left"
                    >
                        <h2 className="text-lg md:text-xl font-semibold text-foreground">
                            Feature Requests
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Have an idea or feature suggestion? We would love to hear it.
                        </p>
                    </motion.div>
                </section>

                <section className="max-w-3xl mx-auto mt-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-md p-6"
                    >
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">
                            Email Support
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-muted-foreground">
                            fyoiaaidev@gmail.com
                        </p>
                        <p className="mt-1 text-xs md:text-sm text-muted-foreground/80">
                            Response time: 24–48 hours.
                        </p>
                    </motion.div>
                </section>
            </Wrapper>
        </div>
    );
};

export default SupportPage;

