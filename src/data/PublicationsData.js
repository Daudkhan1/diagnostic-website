// src/data/publicationsData.js (Example structure)
export const publicationsData = [
    {
      id: 1,
      title: 'Toward Interpretable and Generalized Mitosis Detection in Digital Pathology Using Deep Learning',
      description: 'This study proposes a lightweight deep learning classification model for mitosis detection that is interpretable and generalizable across datasets and tumor types. Achieving F1-scores of 0.87 on MiDoG’22 and 0.83 on TUPAC’16 without fine-tuning, the model emphasizes robust preprocessing, hybrid CNN architecture, and explainability via GradCAM for clinical adoption.',
      authors: ['Hasan Farooq', 'Saira Saleem', 'Rifat Aleem', 'Ayesha Iftikhar', 'Umer Nisar Sheikh', 'Hammad Naweed'],
      year: 2024,
      citations: '1',
      imageUrl: '/assets/img/publications/image1.png',
      webURL: 'https://journals.sagepub.com/doi/10.1177/20552076241255471'
    },
    {
      id: 2,
      title: 'GSLAlign Community Detection and Local PPI Network Alignment',
      description: 'GSLAlign is a two-stage algorithm that aligns protein-protein interaction (PPI) networks by first detecting topologically meaningful communities using GraphSAGE with gene expression data, and then aligning them via protein sequence similarity. It outperforms existing local alignment methods in terms of biological relevance, connectivity, and coverage, achieving up to 8% higher semantic similarity.',
      authors: ['Umair Ayub', 'Hammad Naweed'],
      year: 2024,
      citations: '-',
      imageUrl: '/assets/img/publications/image2.png',
      webURL: 'https://www.tandfonline.com/doi/full/10.1080/07391102.2024.2301757'
    },
    {
      id: 3,
      title: 'MedTSS: Transforming Abstractive Summarization of Scientific Articles with Linguistic Analysis and Concept Reinforcement',
      description: 'MedTSS introduces a lightweight, knowledge-driven module that enhances pretrained models (PTMs) for abstractive summarization of scientific articles, particularly in the medical domain. By addressing token limitations, reinforcing key concepts, and mitigating entity hallucination without additional training, MedTSS significantly improves summarization performance. Notably, it boosts the Rouge-1 score from 16.46 to 35.17, demonstrating its effectiveness in generating accurate and comprehensive summaries .',
      authors: ['Nadia Saeed', 'Hammad Naveed'],
      year: 2024,
      citations: '-',
      imageUrl: '/assets/img/publications/image3.png',
      webURL: 'https://link.springer.com/article/10.1007/s10115-023-02055-6'
    },
    {
      id: 4,
      title: 'Low-Cost Histopathological Mitosis Detection for Microscope-acquired Images',
      description: 'This study introduces LCH-Network, a deep learning-based method that detects mitotic cells in cancer tissue using low-cost microscope images captured with a smartphone. Through novel data augmentation techniques like Label Mix and GAN-generated images, the model achieves an F1-score of 0.71, offering a viable diagnostic aid for resource-limited settings.',
      authors: ['Bilal Shabbir', 'Saira Saleem', 'Iffat Aleem', 'Nida Babar', 'Hammad Farooq', 'Asid Loya', 'Hammad Naveed'],
      year: 2023,
      citations: '-',
      imageUrl: '/assets/img/publications/image4.png',
      webURL: 'https://pubmed.ncbi.nlm.nih.gov/38827107/'
    },
    {
      id: 5,
      title: 'Computational Prediction of Disease-Related lncRNAs Using Machine Learning',
      description: 'This study presents a machine learning framework that predicts disease-associated long non-coding RNAs (lncRNAs) by integrating sequence and structure-based features. By addressing key limitations in earlier models—such as sequence redundancy and class imbalance—the method achieves an F1-score of 76% using SVM, outperforming previous approaches and offering a low-cost, scalable diagnostic tool for complex diseases like cancer.',
      authors: ['Razia Khalid', 'Hammad Naveed', 'Zoya Khalid'],
      year: 2023,
      citations: '7',
      imageUrl: '/assets/img/publications/image5.png',
      webURL: 'https://www.nature.com/articles/s41598-023-27680-7'
    },
    {
      id: 6,
      title: 'Medical Terminology-based Computing System: A Lightweight Post-processing Solution for Out-of-Vocabulary Multi-word Terms',
      description: 'This paper introduces MedTCS, a lightweight medical terminology-aware module that improves word embedding models by resolving out-of-vocabulary (OOV) terms in biomedical texts. By decomposing complex clinical terms using Greek/Latin roots, MedTCS significantly boosts model performance on tasks like named entity recognition and drug classification—raising F1-scores up to 0.81 on benchmark datasets.',
      authors: ['Nadia Saeed', 'Hammad Naveed'],
      year: 2022,
      citations: '3',
      imageUrl: '/assets/img/publications/image6.png',
      webURL: 'https://www.frontiersin.org/journals/molecular-biosciences/articles/10.3389/fmolb.2022.928530/full'
    },
    {
      id: 7,
      title: 'Bias Adjustable Activation Network for Imbalanced Data—Diabetic Foot Ulcer Challenge 2021',
      description: 'This paper introduces a novel activation layer based on softmax to address class imbalance in convolutional neural networks for diabetic foot ulcer detection. The proposed model achieved second place in the validation set with a Macro F1-Score of 0.593 and third place in the test set with a Macro F1-Score of 0.596 in the Diabetic Foot Ulcer Detection 2021 Grand Challenge .',
      authors: ['Salman Ahmed', 'Hammad Naveed'],
      year: 2022,
      citations: '9',
      imageUrl: '/assets/img/publications/image7.png',
      webURL: 'https://link.springer.com/chapter/10.1007/978-3-030-94907-5_4'
    },
    {
      id: 8,
      title: 'PRNet: Progressive Resolution-based Network for Radiograph-based Disease Classification',
      description: 'This paper presents PRNet, a deep learning pipeline using progressive resolution training and a novel bias-adjustable softmax to classify chest X-rays into COVID-19, pneumonia, or normal categories. Achieving 96.33% accuracy and ranking 2nd in the EE-RDS challenge, PRNet effectively improves generalization using multi-resolution fine-tuning and class probability calibration.',
      authors: ['Salman Ahmed', 'Haasha bin Atif', 'Muhammad Bilal Shabbir', 'Hammad Naveed'],
      year: 2021,
      citations: '-',
      imageUrl: '/assets/img/publications/image8.png',
      webURL: 'https://ieeexplore.ieee.org/document/9708553'
    },
    {
      id: 9,
      title: 'A Generic Approach for Classification of Psychological Disorders Diagnosis Using EEG',
      description: 'This paper proposes a robust machine learning pipeline for diagnosing schizophrenia, epilepsy, and Parkinson’s disease using EEG signals across multiple datasets. By selecting high-variance electrodes and extracting relevant linear/nonlinear features, the method achieved F1-scores of 93% (schizophrenia), 85% (epilepsy), and 80% (Parkinson’s), demonstrating generalizability and noise tolerance across varied signal sources.',
      authors: ['Talha Anwar', 'Naeem Rehmat', 'Hammad Naveed'],
      year: 2021,
      citations: '5',
      imageUrl: '/assets/img/publications/image9.png',
      webURL: 'https://ieeexplore.ieee.org/document/9629976'
    },
    {
      id: 10,
      title: 'Computational Prediction of lncRNA-Protein Interactions Using Machine Learning',
      description: 'This study proposes a machine learning model combining sequence and structural similarity features to predict human lncRNA-protein interactions. Using XGBoost, the model achieved an accuracy of 98.6% and F1-score of 98.7%, outperforming deep learning methods like RPITER and IPMiner while remaining computationally efficient and more generalizable for biomedical applications.',
      authors: ['Muhammad Mushtaq', 'Hammad Naveed', 'Zoya Khalid'],
      year: 2021,
      citations: '1',
      imageUrl: '/assets/img/publications/image10.png',
      webURL: 'https://ieeexplore.ieee.org/document/9630282'
    },
    {
      id: 11,
      title: 'A Hierarchical Deep Learning Based Approach for Multi-functional Enzyme Classification',
      description: 'This paper introduces mlHECNet, a deep learning framework that classifies enzymes into multi-functional categories up to the fourth level of the Enzyme Commission hierarchy. It achieves 71.4% subset accuracy and 96.1% Macro F1 Score at the deepest level—surpassing existing tools by using assisted learning and hierarchical modeling for better functional predictions in enzyme discovery.',
      authors: ['Kinaan Aamir Khan', 'Safyan Aman Memon', 'Hammad Naveed'],
      year: 2021,
      citations: '16',
      imageUrl: '/assets/img/publications/image11.png',
      webURL: 'https://onlinelibrary.wiley.com/doi/full/10.1002/pro.4146'
    },
    {
      id: 12,
      title: 'PMNet: A Probability Map Based Scaled Network for Breast Cancer Diagnosis',
      description: 'PMNet is a two-stage deep learning pipeline that combines patch-level predictions with global WSI context to detect breast cancer subtypes. Using EfficientNet and a probability map-based architecture, it achieves a Dice coefficient of 69.8% on BACH WSIs and 82.7% on the Dryad dataset, outperforming previous methods and enabling pseudo-annotation of large datasets like TCGA for future deep learning research.',
      authors: ['Salman Ahmed', 'Maria Tariq', 'Hammad Naveed'],
      year: 2020,
      citations: '8',
      imageUrl: '/assets/img/publications/image12.png',
      webURL: 'https://www.sciencedirect.com/science/article/abs/pii/S0895611121000112'
    },
    {
      id: 13,
      title: 'HECNet: A Hierarchical Approach to Enzyme Function Classification Using a Siamese Triplet Network',
      description: 'HECNet introduces a deep learning framework combining hierarchical classification with a Siamese Triplet Network to predict enzyme functions up to the fourth EC level. Trained on over 11,000 enzymes, it achieves 91.2% accuracy and 81.9% Macro-F1 at the most specific level, significantly outperforming existing tools like DEEPre and ECPred, even in cases with scarce data and isoform variation.',
      authors: ['Safyan Aman Memon', 'Kinaan Aamir Khan', 'Hammad Naveed'],
      year: 2020,
      citations: '41',
      imageUrl: '/assets/img/publications/image13.png',
      webURL: 'https://academic.oup.com/bioinformatics/article/36/17/4583/5843785?login=false'
    },
    {
      id: 14,
      title: 'Predicting the Pathogenicity of Protein Coding Mutations Using Natural Language Processing',
      description: 'This paper introduces NLP-SNPPred, a novel model that predicts the pathogenicity of protein mutations using NLP-derived features from biomedical literature. Trained on OncoKB and validated on benchmark datasets, it outperforms state-of-the-art tools by leveraging text embeddings and mutation-specific sentence analysis, achieving an AUC of 0.81 and F1-scores up to 0.78 in leave-one-gene-out tests.',
      authors: ['Naeem Rehmat', 'Hammad Farooq', 'Sanjay Kumar', 'Sibt ul Hussain', 'Hammad Naveed'],
      year: 2020,
      citations: '4',
      imageUrl: '/assets/img/publications/image14.png',
      webURL: 'https://ieeexplore.ieee.org/document/9175781'
    },
    {
      id: 15,
      title: 'Genetic Mutation Classification Using Machine Learning',
      description: 'This study presents a machine learning approach to classify cancer-related genetic mutations, aiming to assist pathologists in reducing misdiagnosis rates. Utilizing the OncoKB dataset, the authors encoded gene and mutation information using one-hot encoding and transformed clinical literature into numerical vectors via tf-idf, word2vec, and doc2vec. Among various classifiers tested, the XGBoost model achieved a log loss of 0.9 and an accuracy of 68%, significantly outperforming a random baseline model. This method offers a more efficient and accurate alternative to manual mutation classification, potentially expediting diagnosis and improving treatment strategies.',
      authors: ['Hammad Farooq', 'Naeem Rehmat', 'Sanjay Kumar', 'Hammad Naveed'],
      year: 2018,
      citations: '-',
      imageUrl: '/assets/img/publications/image15.png',
      webURL: 'https://www.cell.com/biophysj/fulltext/S0006-3495(18)32841-8'
    }
];