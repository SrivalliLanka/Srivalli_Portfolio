// All projects data - from resume and additional projects
export const projects = [
  // Projects from Resume
  {
    id: 1,
    title: 'RailTEC — Freight Rail Safety Research',
    shortDescription: 'Ongoing applied research program focused on understanding freight rail safety through statistical modeling, exploratory data analysis, and text analytics.',
    detailedDescription: [
      'RailTEC is an ongoing applied research program focused on understanding freight rail safety through statistical modeling, exploratory data analysis, and text analytics. The work emphasizes methodological rigor, interpretability, and responsible use of data rather than finalized results or deployed systems.',
      'The research is organized into multiple independent workstreams, each addressing a specific analytical question related to derailment frequency, data structure, or reporting consistency. All workstreams are currently in exploratory or research-development stages.',
      '👉 <strong>Detailed explanations, workflows, and visuals for each workstream are presented in the accompanying slide deck, which documents the research structure, methods, and current status in a clear, visual format.</strong>',
      '<strong>Research Scope at a Glance:</strong> The RailTEC research program currently includes derailment rate modeling using Poisson and Negative Binomial regression, exposure and segment-level model design for rate interpretation, conceptual exploration of zero-heavy count models, NLP-based consistency analysis of accident narratives, and literature review on derailment severity modeling. Each workstream is treated as a standalone research inquiry, rather than as a single combined project.'
    ],
    tech: ['Python', 'R', 'Statistical Modeling', 'Text Mining', 'NLP', 'Poisson Regression', 'Negative Binomial', 'LDA', 'Data Analysis'],
    features: [
      'Derailment rate modeling using Poisson and Negative Binomial regression',
      'Exposure and segment-level model design for rate interpretation',
      'Conceptual exploration of zero-heavy count models (ZIP, hurdle models)',
      'NLP-based consistency analysis of accident narratives',
      'Topic modeling (LDA) for exploratory structure discovery',
      'Segment-level data aggregation and exploratory data analysis',
      'Working with sparse, heterogeneous, real-world safety data',
      'Text preprocessing and tokenization for noisy narrative data',
      'Keyword-based feature design using domain knowledge',
      'Comparative analysis of structured vs unstructured data sources',
      'Framing applied research questions under uncertainty',
      'Human-in-the-loop validation and interpretive review'
    ],
    date: 'May 2025 – Present',
    github: '',
    live: '',
    thumbnail: '/projects/RailTEC.png',
    heroMedia: {
      type: 'slides',
      url: 'https://docs.google.com/presentation/d/e/2PACX-1vRvpRvUSp-CxnNVSfHDHOYmgF8kats9UboZTKnDyK_TOtAd5RFCu8fA7sXiqImVwTyYqB1Hx_cjyD8f/pubembed?start=true&loop=true&delayms=3000'
    },
    media: []
  },
  {
    id: 2,
    title: 'Carely — An AI Companion for Memory, Wellness, and Trust',
    shortDescription: 'An AI companion designed to support seniors with daily routines, emotional well-being, and memory — prioritizing safety, trust, and human-centered design.',
    detailedDescription: [
      'Carely is not just a chatbot. It is an AI companion designed to support seniors with daily routines, emotional well-being, and memory — while prioritizing safety, trust, and human-centered design. The core challenge wasn\'t what Carely should say, but how an AI system should remember, reason, and respond responsibly over time.',
      '🧠 <strong>Memory as a First-Class System:</strong> Carely is built with a layered memory architecture that explicitly separates short-term conversational context, long-term personal memory (people, routines, preferences), and temporal grounding (when information is valid). This allows Carely to recall meaningful details, maintain continuity across conversations, and reduce repetition — while minimizing hallucinations. Memory storage and retrieval are explicit, auditable, and designed for safe scaling.',
      '🛡️ <strong>Safety & Guardrails by Design:</strong> Carely embeds guardrails at the system level, not as an afterthought. This includes prompt-level safety constraints and intent detection, emergency escalation workflows that notify caregivers, and validation for ambiguous, emotional, or edge-case inputs. The system is intentionally designed to support—not replace—human caregivers, reinforcing trust and accountability.',
      '🗣️ <strong>Human-Centered Interaction:</strong> Carely focuses on reducing cognitive load through voice-first and chat-based interactions, natural language task completion (mood check-ins, medication logging), and an empathetic, non-robotic conversational tone refined through iteration. Users consistently described Carely as feeling more like a caring companion than a tool.',
      '🧪 <strong>Grounded Evaluation, Not Just Demos:</strong> Carely was evaluated with real users, including seniors and caregivers, across memory recall and continuity, emotional support and reminders, and emergency alert workflows. Usability metrics (UMUX-Lite) and qualitative feedback directly informed UI, memory, and safety improvements.',
      '✨ <strong>Why Carely Matters:</strong> Carely reflects an approach to AI that prioritizes architecture over prompts, safety over novelty, and humans over automation — demonstrating how agentic systems can be built responsibly for real-world use.'
    ],
    tech: ['Python', 'ChromaDB', 'SQLite', 'Generative AI', 'LLM', 'Vector Databases', 'Memory Architecture'],
    features: [
      'Multi-layer memory architecture (short-term context + long-term personal memory + temporal grounding)',
      'System-level safety guardrails and intent detection',
      'Emergency escalation workflows with caregiver notifications',
      'Voice-first and chat-based interactions',
      'Natural language task completion (mood check-ins, medication logging)',
      'Empathetic, human-centered conversational design',
      'Real-user evaluation with seniors and caregivers',
      'Usability metrics (UMUX-Lite) and iterative refinement',
      'Explicit, auditable memory storage and retrieval',
      'Support for—not replacement of—human caregivers'
    ],
    date: 'Aug 2025 – Dec 2025',
    github: '',
    live: '',
    // Media support - add your images/videos/slides here
    thumbnail: '/projects/Carely_logo.png', // Path to thumbnail image for project tile
    heroMedia: {
      type: 'video',
      url: '/projects/Carely.mp4'
    },
    media: [
      // Additional media gallery - array of images/videos/slides
      // { type: 'image', url: '/projects/carely-1.jpg', caption: 'Screenshot 1' },
      // { type: 'youtube', url: 'https://www.youtube.com/embed/VIDEO_ID' },
      // { type: 'slides', url: 'https://docs.google.com/presentation/d/ID/preview' }
    ]
  },
  {
    id: 3,
    title: 'Foundational Data Engineering Projects',
    shortDescription: 'A collection of foundational data engineering projects demonstrating ETL pipelines, AWS cloud services, and data processing workflows.',
    detailedDescription: [
      'This collection showcases foundational data engineering projects that demonstrate core ETL pipeline development, AWS cloud services integration, and data processing workflows. These projects highlight practical experience with real-world data engineering challenges.'
    ],
    tech: ['Python', 'Apache Airflow', 'AWS S3', 'AWS EC2', 'AWS Glue', 'AWS Lambda', 'AWS Athena', 'QuickSight', 'ETL', 'Data Engineering'],
    features: [
      'Cloud-based ETL pipeline development',
      'AWS-native data processing architectures',
      'Automated data ingestion and transformation',
      'Interactive analytics dashboards',
      'Serverless data processing workflows'
    ],
    date: 'May 2025 – Aug 2025',
    github: '',
    live: '',
    thumbnail: '/projects/DE_logo.png',
    heroMedia: {
      type: 'image',
      url: '/projects/DE_logo.png'
    },
    media: [],
    subProjects: [
      {
        id: 3.1,
        title: 'Automated Weather Data ETL Pipeline',
        shortDescription: 'Automated daily ingestion from OpenWeatherMap API → cleaned dataset → stored in S3 using an Airflow DAG.',
        detailedDescription: [
          'This project was built as a hands-on exploration to understand how production-style ETL pipelines are designed, orchestrated, and deployed in a cloud environment using industry-standard tools.',
          '',
          '<strong>Learning Objectives</strong>',
          '',
          '• Understand REST API–based data ingestion patterns',
          '• Gain hands-on experience with Apache Airflow DAGs and scheduling',
          '• Learn how ETL pipelines are deployed and monitored on AWS',
          '• Practice storing structured outputs in cloud object storage (S3)',
          '',
          '<div class="my-6"><img src="/projects/Airflow_img.png" alt="Airflow" class="w-full max-w-4xl mx-auto rounded-lg shadow-lg" /></div>',
          '',
          '<strong>What I Built</strong>',
          '',
          'I implemented a cloud-based ETL pipeline that ingests live weather data from the OpenWeatherMap REST API and stores analytics-ready outputs in Amazon S3. The workflow is orchestrated using Apache Airflow running on an AWS EC2 instance, enabling scheduled execution, retries, and monitoring through the Airflow UI.',
          '',
          '<strong>Architecture Overview</strong>',
          '',
          '• <strong>Extract:</strong> Fetch weather data from the OpenWeatherMap API (JSON)',
          '• <strong>Transform:</strong> Normalize key attributes (timestamp, temperature, humidity, conditions)',
          '• <strong>Load:</strong> Persist structured outputs to Amazon S3',
          '• <strong>Orchestration:</strong> Airflow DAG manages scheduling, dependencies, retries, and logs',
          '• <strong>Deployment:</strong> Airflow hosted on AWS EC2 for continuous execution',
          '',
          '<strong>Reflection & Next Steps</strong>',
          '',
          'This project helped me understand how simple data pipelines are operationalized in real-world environments. As next steps, I would:',
          '',
          '• Store outputs in Parquet format with date-based partitioning',
          '• Add data quality validation steps',
          '• Migrate orchestration to AWS MWAA or a Dockerized Airflow setup'
        ],
        tech: ['Python', 'Apache Airflow', 'AWS EC2', 'ETL', 'REST APIs'],
        features: [
          'Real-time weather data ingestion',
          'Fault-tolerant orchestration',
          'Retry logic implementation',
          'Python DAGs for workflow management',
          'Integration with OpenWeatherMap API'
        ],
        date: 'May 2025 – Aug 2025',
        github: '',
        live: '',
        thumbnail: '',
        heroMedia: {},
        media: []
      },
      {
        id: 3.2,
        title: 'YouTube Analytics Data Engineering Pipeline',
        shortDescription: 'A serverless AWS data lake pipeline was built to ingest, process, query, and visualize YouTube trending data across multiple regions.',
        detailedDescription: [
          'This project was completed as a hands-on data engineering exercise to gain practical experience building an end-to-end analytics pipeline on AWS using a real-world public dataset (YouTube trending data).',
          '',
          'The focus was on learning and implementing industry-standard tools and patterns.',
          '',
          '<div class="my-6"><img src="/projects/youtube-DE.jpg" alt="Flow" class="w-full max-w-4xl mx-auto rounded-lg shadow-lg" /><p class="text-center text-gray-600 font-medium mt-2">Flow</p></div>',
          '',
          '<strong>Data Ingestion</strong>',
          '',
          '• Landed raw regional CSVs and category JSON files into an S3-based data lake',
          '• Preserved raw data using a schema-on-read approach',
          '',
          '<strong>Data Transformation</strong>',
          '',
          '• Used Glue PySpark jobs to clean schemas and join datasets',
          '• Converted data into analytics-optimized Parquet format',
          '',
          '<strong>Analytics & Visualization</strong>',
          '',
          '• Queried curated data directly from S3 using Athena',
          '• Built QuickSight dashboards to explore trends and engagement metrics',
          '',
          '<strong>Automation & Security</strong>',
          '',
          '• Applied event-driven triggers using Lambda',
          '• Configured IAM roles following least-privilege access'
        ],
        tech: ['AWS S3', 'AWS Glue', 'AWS Lambda', 'AWS Athena', 'QuickSight', 'PySpark', 'AWS IAM', 'Data Engineering'],
        features: [
          'AWS-native data pipeline architecture',
          'YouTube metadata processing',
          'Interactive KPI dashboards',
          'Regional trend tracking',
          'Serverless data processing'
        ],
        date: 'May 2025 – Aug 2025',
        github: '',
        live: '',
        thumbnail: '',
        heroMedia: {},
        media: []
      }
    ]
  },
]

/* 
 * Media Types Guide:
 * 
 * 1. Images:
 *    thumbnail: '/projects/project-name-thumb.jpg'
 *    heroMedia: { type: 'image', url: '/projects/project-name-hero.jpg' }
 *    media: [{ type: 'image', url: '/projects/project-name-1.jpg', caption: 'Optional caption' }]
 * 
 * 2. Videos:
 *    heroMedia: { type: 'video', url: '/projects/project-name-demo.mp4' }
 *    media: [{ type: 'video', url: '/projects/project-name-video.mp4', caption: 'Demo video' }]
 * 
 * 3. YouTube:
 *    heroMedia: { type: 'youtube', url: 'https://www.youtube.com/embed/VIDEO_ID' }
 *    media: [{ type: 'youtube', url: 'https://www.youtube.com/embed/VIDEO_ID', caption: 'YouTube demo' }]
 * 
 * 4. Google Slides:
 *    heroMedia: { type: 'slides', url: 'https://docs.google.com/presentation/d/PRESENTATION_ID/preview' }
 *    media: [{ type: 'slides', url: 'https://docs.google.com/presentation/d/PRESENTATION_ID/preview', caption: 'Project presentation' }]
 * 
 * Note: For Google Slides, replace '/edit' with '/preview' in the URL for embedding
 */

