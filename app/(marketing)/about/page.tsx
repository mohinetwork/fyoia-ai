"use client";

import Background from "@/components/global/background";
import Wrapper from "@/components/global/wrapper";
import { motion } from "motion/react";

const AboutPage = () => {
    return (
        <div className="w-full min-h-dvh pt-18 relative overflow-hidden">
            <Background />

            <Wrapper className="relative z-10 py-16 lg:py-24">
                <section className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-semibold bg-linear-to-r from-foreground to-foreground/70 text-transparent bg-clip-text"
                    >
                        About Fyoia AI
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-left md:text-center space-y-4"
                    >
                        <span className="block">
                            Fyoia AI is an all-in-one artificial intelligence platform designed to help creators, developers, and
                            businesses generate content faster. Our goal is to make powerful AI tools simple, fast, and accessible
                            for everyone.
                        </span>
                        <span className="block mt-4">
                            With Fyoia AI, users can generate text, code, images, videos, and voice conversations using advanced AI
                            models. Instead of using multiple tools, Fyoia AI brings everything into one platform.
                        </span>
                        <span className="block mt-4">
                            We focus on providing high-quality AI generation, fast performance, and an easy-to-use interface so
                            anyone can create with AI without complexity.
                        </span>
                    </motion.p>
                </section>

                <section className="max-w-4xl mx-auto mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-md p-8 md:p-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center">
                            Our Mission
                        </h2>
                        <p className="mt-4 text-sm md:text-base text-muted-foreground text-center">
                            Our mission is to make AI creation simple and powerful. We want to help people turn ideas into content,
                            code, images, and videos using AI technology.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-xl p-8 md:p-10"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center">
                            What Fyoia AI Offers
                        </h3>
                        <ul className="mt-6 grid gap-4 text-sm md:text-base text-muted-foreground md:grid-cols-2">
                            <li className="rounded-lg border border-foreground/5 bg-foreground/5 px-4 py-3">
                                AI Chat and Coding Models
                            </li>
                            <li className="rounded-lg border border-foreground/5 bg-foreground/5 px-4 py-3">
                                Text to Image Generation
                            </li>
                            <li className="rounded-lg border border-foreground/5 bg-foreground/5 px-4 py-3">
                                Text to Video Generation
                            </li>
                            <li className="rounded-lg border border-foreground/5 bg-foreground/5 px-4 py-3">
                                Voice AI Conversations
                            </li>
                            <li className="rounded-lg border border-foreground/5 bg-foreground/5 px-4 py-3 md:col-span-2">
                                Creative AI Tools (Coming Soon)
                            </li>
                        </ul>
                    </motion.div>
                </section>
            </Wrapper>
        </div>
    );
};

export default AboutPage;

