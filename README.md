# DeepPlanning: Related Papers Collection

A curated collection of papers related to [DeepPlanning: Benchmarking Long-Horizon Agentic Planning with Verifiable Constraints](https://arxiv.org/abs/2601.18137) (2026).

## Table of Contents

- [Primary Paper](#primary-paper)
- [Planning Benchmarks](#planning-benchmarks)
- [Travel Planning](#travel-planning)
- [Shopping and Search Agents](#shopping-and-search-agents)
- [Web Agent Benchmarks](#web-agent-benchmarks)
- [Tool Use and APIs](#tool-use-and-apis)
- [Foundation Models](#foundation-models)
- [Agent Evaluation Frameworks](#agent-evaluation-frameworks)
- [LLM Reasoning and Verification](#llm-reasoning-and-verification)

## Primary Paper

| File                                                              | Title                                                                                | Year | ArXiv                                          | Description                                                                                                                                           |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DeepPlanning_2601.18137.pdf](papers/DeepPlanning_2601.18137.pdf) | DeepPlanning: Benchmarking Long-Horizon Agentic Planning with Verifiable Constraints | 2026 | [2601.18137](https://arxiv.org/abs/2601.18137) | Benchmark for practical long-horizon agent planning with multi-day travel and multi-product shopping tasks requiring global constrained optimization. |

## Planning Benchmarks

| File                                                                      | Title                                                                                                          | Year | ArXiv                                          | Description                                                                                             |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [ProgOverThinking_2601.09097.pdf](papers/ProgOverThinking_2601.09097.pdf) | Programming over Thinking: Efficient and Robust Multi-Constraint Planning                                      | 2026 | [2601.09097](https://arxiv.org/abs/2601.09097) | Proposes code generation over chain-of-thought for multi-constraint planning problems.                  |
| [DeepPlanner_2510.12979.pdf](papers/DeepPlanner_2510.12979.pdf)           | DeepPlanner: Scaling Planning Capability for Deep Research Agents via Advantage Shaping                        | 2025 | [2510.12979](https://arxiv.org/abs/2510.12979) | Scales planning capabilities in deep research agents using advantage shaping in reinforcement learning. |
| [TCP_2505.19927.pdf](papers/TCP_2505.19927.pdf)                           | TCP: A Benchmark for Temporal Constraint-Based Planning                                                        | 2025 | [2505.19927](https://arxiv.org/abs/2505.19927) | Benchmark focused on planning under temporal constraints, published at EMNLP 2025.                      |
| [TimeArena_2402.05733.pdf](papers/TimeArena_2402.05733.pdf)               | TimeArena: Shaping Efficient Multitasking Language Agents in a Time-Aware Simulation                           | 2024 | [2402.05733](https://arxiv.org/abs/2402.05733) | Time-aware simulation for evaluating multitasking efficiency in language agents (ACL 2024).             |
| [PlanBench_2206.10498.pdf](papers/PlanBench_2206.10498.pdf)               | PlanBench: An Extensible Benchmark for Evaluating Large Language Models on Planning and Reasoning about Change | 2022 | [2206.10498](https://arxiv.org/abs/2206.10498) | Extensible benchmark evaluating LLMs on classical planning and reasoning about state changes.           |

## Travel Planning

| File                                                                        | Title                                                                                                           | Year | ArXiv                                          | Description                                                                                               |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [TourPlanner_2601.04698.pdf](papers/TourPlanner_2601.04698.pdf)             | TourPlanner: A Competitive Consensus Framework with Constraint-Gated Reinforcement Learning for Travel Planning | 2026 | [2601.04698](https://arxiv.org/abs/2601.04698) | Uses constraint-gated RL and multi-agent competition for travel planning.                                 |
| [TravelBench_2512.22673.pdf](papers/TravelBench_2512.22673.pdf)             | TravelBench: A Broader Real-World Benchmark for Multi-Turn and Tool-Using Travel Planning                       | 2025 | [2512.22673](https://arxiv.org/abs/2512.22673) | Multi-turn travel planning with 10 real-world tools, infeasible request handling, and sandbox evaluation. |
| [TriFlow_2512.11271.pdf](papers/TriFlow_2512.11271.pdf)                     | TriFlow: A Progressive Multi-Agent Framework for Intelligent Trip Planning                                      | 2025 | [2512.11271](https://arxiv.org/abs/2512.11271) | Multi-agent framework with progressive refinement for trip planning.                                      |
| [TripScore_2510.09011.pdf](papers/TripScore_2510.09011.pdf)                 | TripScore: Benchmarking and Rewarding Real-World Travel Planning with Fine-Grained Evaluation                   | 2025 | [2510.09011](https://arxiv.org/abs/2510.09011) | Unified scoring metric for travel plan quality with RL integration via GRPO.                              |
| [TripTailor_2508.01432.pdf](papers/TripTailor_2508.01432.pdf)               | TripTailor: A Real-World Benchmark for Personalized Travel Planning                                             | 2025 | [2508.01432](https://arxiv.org/abs/2508.01432) | Evaluates personalization and reasonableness of itineraries (ACL 2025 Findings).                          |
| [ChinaTravel_2412.13682.pdf](papers/ChinaTravel_2412.13682.pdf)             | ChinaTravel: An Open-Ended Benchmark for Language Agents in Chinese Travel Planning                             | 2024 | [2412.13682](https://arxiv.org/abs/2412.13682) | Chinese travel planning benchmark with stricter constraints and DSL-based evaluation.                     |
| [PersonalLLMAgents_2410.13766.pdf](papers/PersonalLLMAgents_2410.13766.pdf) | Personal Large Language Model Agents: A Case Study on Tailored Travel Planning                                  | 2024 | [2410.13766](https://arxiv.org/abs/2410.13766) | Case study on personalized travel planning with LLM agents (EMNLP 2024 Industry).                         |
| [TravelPlanner_2402.01622.pdf](papers/TravelPlanner_2402.01622.pdf)         | TravelPlanner: A Benchmark for Real-World Planning with Language Agents                                         | 2024 | [2402.01622](https://arxiv.org/abs/2402.01622) | First travel planning benchmark for LLM agents, featuring multi-day itinerary construction (ICML 2024).   |

## Shopping and Search Agents

| File                                                                      | Title                                                                              | Year | ArXiv                                          | Description                                                                         |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---- | ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| [LocalSearchBench_2512.07436.pdf](papers/LocalSearchBench_2512.07436.pdf) | LocalSearchBench: Benchmarking Agentic Search in Real-World Local Life Services    | 2025 | [2512.07436](https://arxiv.org/abs/2512.07436) | Evaluates agentic search for local services like restaurants and businesses.        |
| [DeepShop_2506.02839.pdf](papers/DeepShop_2506.02839.pdf)                 | DeepShop: A Benchmark for Deep Research Shopping Agents                            | 2025 | [2506.02839](https://arxiv.org/abs/2506.02839) | Benchmark for shopping agents that must deeply research products before purchasing. |
| [WebShop_2207.01206.pdf](papers/WebShop_2207.01206.pdf)                   | WebShop: Towards Scalable Real-World Web Interaction with Grounded Language Agents | 2022 | [2207.01206](https://arxiv.org/abs/2207.01206) | Simulated e-commerce environment for grounded web interaction (NeurIPS 2022).       |

## Web Agent Benchmarks

| File                                                          | Title                                                                     | Year | ArXiv                                          | Description                                                                                    |
| ------------------------------------------------------------- | ------------------------------------------------------------------------- | ---- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [BrowseComp_2504.12516.pdf](papers/BrowseComp_2504.12516.pdf) | BrowseComp: A Simple Yet Challenging Benchmark for Browsing Agents        | 2025 | [2504.12516](https://arxiv.org/abs/2504.12516) | Challenging benchmark from OpenAI testing browsing agent capabilities.                         |
| [WebVoyager_2401.13919.pdf](papers/WebVoyager_2401.13919.pdf) | WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models | 2024 | [2401.13919](https://arxiv.org/abs/2401.13919) | End-to-end web agent using multimodal models for real-world web tasks (ACL 2024).              |
| [WebArena_2307.13854.pdf](papers/WebArena_2307.13854.pdf)     | WebArena: A Realistic Web Environment for Building Autonomous Agents      | 2023 | [2307.13854](https://arxiv.org/abs/2307.13854) | Self-hosted realistic web environment for end-to-end agent evaluation (ICLR 2024).             |
| [Mind2Web_2306.06070.pdf](papers/Mind2Web_2306.06070.pdf)     | Mind2Web: Towards a Generalist Agent for the Web                          | 2023 | [2306.06070](https://arxiv.org/abs/2306.06070) | Large-scale dataset for building generalist web agents across diverse websites (NeurIPS 2023). |

## Tool Use and APIs

| File                                                    | Title                                                                                      | Year | ArXiv                                          | Description                                                             |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| [ToolGym_2601.06328.pdf](papers/ToolGym_2601.06328.pdf) | ToolGym: An Open-World Tool-Using Environment for Scalable Agent Testing and Data Curation | 2026 | [2601.06328](https://arxiv.org/abs/2601.06328) | Open-world environment for testing tool-using agents at scale.          |
| [ToolLLM_2307.16789.pdf](papers/ToolLLM_2307.16789.pdf) | ToolLLM: Facilitating Large Language Models to Master 16000+ Real-World APIs               | 2023 | [2307.16789](https://arxiv.org/abs/2307.16789) | Framework for training LLMs to use 16,000+ real-world APIs (ICLR 2024). |
| [APIBank_2304.08244.pdf](papers/APIBank_2304.08244.pdf) | API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs                                | 2023 | [2304.08244](https://arxiv.org/abs/2304.08244) | Benchmark for evaluating LLMs on API/tool usage (EMNLP 2023).           |

## Foundation Models

| File                                                                  | Title                                                                                             | Year | ArXiv                                          | Description                                                               |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---- | ---------------------------------------------- | ------------------------------------------------------------------------- |
| [DeepSeekV3_2512.02556.pdf](papers/DeepSeekV3_2512.02556.pdf)         | DeepSeek-v3.2: Pushing the Frontier of Open Large Language Models                                 | 2025 | [2512.02556](https://arxiv.org/abs/2512.02556) | DeepSeek's frontier open LLM.                                             |
| [GLM45_2508.06471.pdf](papers/GLM45_2508.06471.pdf)                   | GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models                                   | 2025 | [2508.06471](https://arxiv.org/abs/2508.06471) | MoE model (355B params) strong on agentic benchmarks including TAU-Bench. |
| [KimiK2_2507.20534.pdf](papers/KimiK2_2507.20534.pdf)                 | Kimi K2: Open Agentic Intelligence                                                                | 2025 | [2507.20534](https://arxiv.org/abs/2507.20534) | Open-weight model focused on agentic intelligence from Moonshot AI.       |
| [Gemini25_2507.06261.pdf](papers/Gemini25_2507.06261.pdf)             | Gemini 2.5: Pushing the Frontier with Advanced Reasoning, Multimodality, and Agentic Capabilities | 2025 | [2507.06261](https://arxiv.org/abs/2507.06261) | Google's frontier model with next-generation agentic capabilities.        |
| [Qwen3_2505.09388.pdf](papers/Qwen3_2505.09388.pdf)                   | Qwen3 Technical Report                                                                            | 2025 | [2505.09388](https://arxiv.org/abs/2505.09388) | Technical report for the Qwen3 model family from Alibaba.                 |
| [Seed15Thinking_2504.13914.pdf](papers/Seed15Thinking_2504.13914.pdf) | Seed1.5-Thinking: Advancing Superb Reasoning Models with Reinforcement Learning                   | 2025 | [2504.13914](https://arxiv.org/abs/2504.13914) | ByteDance's reasoning model trained with RL for advanced reasoning tasks. |

## Agent Evaluation Frameworks

| File                                                                  | Title                                                                                          | Year | ArXiv                                          | Description                                                               |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---- | ---------------------------------------------- | ------------------------------------------------------------------------- |
| [LimitAwareness_2601.22027.pdf](papers/LimitAwareness_2601.22027.pdf) | Evaluating the Consistency and Limit-Awareness of LLM Agents                                   | 2026 | [2601.22027](https://arxiv.org/abs/2601.22027) | Studies whether LLM agents know and respect their own limitations.        |
| [AgencyBench_2601.11044.pdf](papers/AgencyBench_2601.11044.pdf)       | AgencyBench: Benchmarking the Frontiers of Autonomous Agents in 1M-Token Real-World Contexts   | 2026 | [2601.11044](https://arxiv.org/abs/2601.11044) | Evaluates autonomous agents handling million-token real-world contexts.   |
| [VitaBench_2509.26490.pdf](papers/VitaBench_2509.26490.pdf)           | VitaBench: Benchmarking LLM Agents with Versatile Interactive Tasks in Real-World Applications | 2025 | [2509.26490](https://arxiv.org/abs/2509.26490) | Versatile interactive task benchmark for LLM agents in real applications. |
| [ARE_2509.17158.pdf](papers/ARE_2509.17158.pdf)                       | ARE: Scaling Up Agent Environments and Evaluations                                             | 2025 | [2509.17158](https://arxiv.org/abs/2509.17158) | Meta's framework for scaling agent environments and evaluation.           |
| [UserBench_2507.22034.pdf](papers/UserBench_2507.22034.pdf)           | UserBench: An Interactive Gym Environment for User-Centric Agents                              | 2025 | [2507.22034](https://arxiv.org/abs/2507.22034) | Interactive environment for evaluating user-centric agent behaviors.      |
| [Pi2Bench_2506.07982.pdf](papers/Pi2Bench_2506.07982.pdf)             | pi2-Bench: Evaluating Conversational Agents in a Dual-Control Environment                      | 2025 | [2506.07982](https://arxiv.org/abs/2506.07982) | Benchmark for conversational agents under dual-control conditions.        |
| [TauBench_2406.12045.pdf](papers/TauBench_2406.12045.pdf)             | tau-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains                   | 2024 | [2406.12045](https://arxiv.org/abs/2406.12045) | Dynamic policy-guided benchmark for tool-agent-user interaction.          |

## LLM Reasoning and Verification

| File                                                                      | Title                                                                                         | Year | ArXiv                                          | Description                                                                                     |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [SelfVerification_2402.08115.pdf](papers/SelfVerification_2402.08115.pdf) | On the Self-Verification Limitations of Large Language Models on Reasoning and Planning Tasks | 2024 | [2402.08115](https://arxiv.org/abs/2402.08115) | Demonstrates that LLMs struggle to verify their own reasoning and planning outputs (ICLR 2025). |
