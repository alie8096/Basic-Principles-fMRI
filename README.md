# fMRI Imaging Presentation

This repository contains the source code for a presentation about fMRI (functional magnetic resonance imaging) imaging method and its performance, developed for the imaging course in medical engineering at Shahrekord Azad University.

**[View Presentation](https://alie8096.github.io/Basic-Principles-fMRI/)**

## About

The presentation covers the principles and applications of fMRI imaging in neuroscience and medical research. It provides an overview of the technology, its methodology, and its significance in understanding brain function and pathology.

## Author

+ [Ali Ebrahimian](https://github.com/alie8096)
+ [Mahdi Rezaie](https://github.com/Mahd25)
+ AmirReza KhaksarHaghani

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE) file for details.

<!-- ## Acknowledgements

Special thanks to [contributors](CONTRIBUTORS.md) who have contributed to this project. -->

## Language Distribution

[![Top Language](https://img.shields.io/github/languages/top/alie8096/fmri-immaging-course-presentation)](https://github.com/alie8096/fmri-immaging-course-presentation)

[![Language](https://img.shields.io/github/languages/count/alie8096/fmri-immaging-course-presentation)](https://github.com/alie8096/fmri-immaging-course-presentation)

[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E&labelColor=F7DF1E&color=323330&label=&labelColor=black)](https://github.com/alie8096/fmri-immaging-course-presentation)
[![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white&labelColor=white&color=239120&label=&labelColor=black)](https://github.com/alie8096/fmri-immaging-course-presentation)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white&labelColor=white&color=1572B6&label=&labelColor=black)](https://github.com/alie8096/fmri-immaging-course-presentation)

## Contents

- `index.html`: The main HTML file for the presentation.
- `style.css`: CSS file for styling the presentation.
- `app.js`: JavaScript file for adding interactivity and functionality.
- `images/`: Directory containing images used in the presentation.

## Usage

To view the presentation, simply open `index.html` in a web browser.

## Contributions

Contributions are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contact

For any inquiries or suggestions regarding the project, feel free to contact the author:

- Email: [ali.ebrahimian.2001.12.16@gmail.com](mailto:ali.ebrahimian.2001.12.16@gmail.com)
- GitHub: [@alie8096](https://github.com/@alie8096)

## Presentation Text

### Basic Principles of fMRI Imaging

#### History

Functional Magnetic Resonance Imaging (fMRI) emerged in the early 1990s when researchers like Seiji Ogawa demonstrated that changes in blood oxygenation levels are associated with neural activity. This discovery paved the way for fMRI to become a crucial tool in brain research. Since then, fMRI has become an indispensable tool in neuroscience and medical research.

#### Introduction

The Working Principle of fMRI
fMRI is based on the magnetic properties of hemoglobin, the protein in blood that carries oxygen. When a brain area becomes active, it requires more oxygen. This increased demand for oxygen leads to increased blood flow to that area, resulting in a higher concentration of oxygenated hemoglobin. Hemoglobin has magnetic properties that generate a magnetic signal when exposed to a magnetic field. Changes in blood flow and oxygenation cause variations in the magnetic signal, which are captured by the fMRI machine.

#### Applications

**Disease Diagnosis**

- **Neuropsychiatric Disorders**: fMRI assists in diagnosing and studying psychiatric conditions such as depression, anxiety, schizophrenia, and other neurological disorders.
- **Surgical Planning**: fMRI helps surgeons identify functional and sensitive areas of the brain before surgery to prevent damage to these critical regions.

**Brain Function Studies**

- **Observing Brain Activity**: fMRI is used to observe and analyze brain activity in response to various stimuli or tasks.
- **Neural Network Analysis**: fMRI is employed to study the connections and correlations between different brain regions and to understand the functional structures of neural networks.

**Treatment of Brain Diseases**

- **Neurofeedback**: This technique trains individuals to regulate their brain activity. Using fMRI, individuals can be taught to control their brain activities in response to visual feedback.

#### Advantages and Disadvantages

**Advantages**

- **Non-Invasive**: fMRI does not require surgery or the injection of radioactive substances, making it a safe method for studying the brain.
- **High Spatial Resolution**: fMRI provides precise localization of brain activities with high spatial resolution.
- **Versatility**: This method is applicable for a wide range of studies and uses, including research, clinical applications, and surgical planning.
**Disadvantages**

- **Lower Temporal Resolution**: fMRI cannot capture neural activity changes instantaneously due to the time lag in the hemodynamic response following neural activity.
- **High Cost**: fMRI equipment is expensive, with high operational and maintenance costs.
- **Complex Data Analysis**: Analyzing fMRI data requires specialized expertise and technical skills, and the data processing can be very complex.

#### Basic Concepts

**2D and 3D Imaging**
In fMRI, brain images are typically collected as 2D slices and then reconstructed into 3D images to provide a comprehensive view of brain activity. These 3D images facilitate more detailed and comprehensive study of the brain.

**Color**
Different color modes are used to display fMRI images. Common modes include RGB (Red, Green, Blue) and grayscale. Heat maps are also used to display the intensity of brain activity, where areas with higher activity are shown in warmer colors (such as red and yellow), and areas with lower activity are shown in cooler colors (such as blue).

**Digital Image**
A digital image is data stored numerically and can be analyzed by a computer. In fMRI, digital images represent the level of blood oxygenation in various parts of the brain and are stored as matrices of numerical values, with each element of the matrix representing a pixel with a specific intensity.

**Hemodynamic Response Function (HRF)**
The Hemodynamic Response Function (HRF) describes how the brain responds to stimuli. HRF represents changes in the BOLD signal over time and is used in task design and data analysis. HRF helps us understand how the hemodynamic response changes over time following neural activity, which is crucial for analyzing fMRI data.

**Nyquist Frequency**
The Nyquist frequency is the minimum rate at which a signal can be sampled without introducing errors. In fMRI, ensuring this frequency is critical to avoid artifacts caused by improper sampling. According to the Nyquist theorem, the sampling rate should be at least twice the highest frequency present in the signal to reconstruct the signal accurately.

**fMRI Signal**
The BOLD (Blood Oxygen Level Dependent) signal forms the basis of fMRI. When a brain region is active, blood flow and oxygenation levels in that region increase. These changes lead to differences in magnetic signals captured by the MRI scanner. These signals are stored as image data and then analyzed to interpret brain activity.

#### Data Collection from the Brain

fMRI data collection is performed using an MRI scanner, which creates a strong magnetic field around the head. This process involves setting up the MRI machine, planning, and executing tasks to capture the BOLD signal. Tasks can include various activities aimed at stimulating specific brain regions to observe hemodynamic responses.

**Task Design**
Different tasks are designed for fMRI studies, including functional, cognitive, and emotional tasks. There are two main approaches to task design in fMRI studies:

- **Block Design**: Tasks are presented in alternating blocks of time. This method is useful for comparing brain activities between different blocks.
- **Event-Related Design**: Tasks are presented randomly with random time intervals. This method provides higher temporal accuracy for analyzing brain responses to specific stimuli.
**Imaging Levels**

- **Localizer**: Used to identify different brain locations. This imaging helps pinpoint brain regions associated with specific tasks.
- **EPI (Echo Planar Imaging)**: Allows for high-speed data collection and is very useful for fMRI studies.
- **Structural**: Shows the overall structures of the brain and serves as a reference for other analyses. These high-resolution structural images aid in identifying and aligning different brain regions.

#### Physics of MRI

**The Physics and Philosophy of MRI Imaging**
MRI imaging is based on magnetic phenomena and nuclear resonance. In MRI, strong magnetic fields and radiofrequency pulses are used to create images of internal body structures. This process involves exciting hydrogen nuclei in the body and recording their magnetic responses.

- **Main Magnetic Field (B0)**: A strong, constant magnetic field generated by the MRI machine. This field aligns the spins of hydrogen nuclei along its direction.
- **Radiofrequency Pulses (RF)**: RF pulses are applied to hydrogen nuclei, causing them to absorb energy and move to higher energy states.
- **Return to Equilibrium**: After the RF pulses are turned off, the hydrogen nuclei return to their equilibrium state, releasing the absorbed energy as magnetic signals. These signals are captured by the MRI receiver.
- **Imaging**: The recorded signals are converted into image data that depict internal structures and changes. In fMRI, these images are used to analyze changes in blood oxygenation levels in the brain.

#### Preprocessing

**Convert Format (DICOM to Nifti)**
Converting medical imaging files from the DICOM format to the Nifti format for fMRI data processing. The Nifti format is a standard for storing neuroimaging data, making it easier to process and analyze.

**Quality Check (Removal of First Few Volumes)**
Removing initial volumes to eliminate unstable signals at the beginning of the scan. This step helps improve the quality of fMRI data.

**Motion Correction**
Correcting for head or body movements to ensure more accurate data. This includes two main types:

- **Rotation**: Correcting for head or body rotations.
- **Translation**: Correcting for head or body translations. These corrections are made using image alignment algorithms to remove unwanted movements.

**Slice Timing Correction**
Correcting timing differences between different slices to ensure data consistency. This step improves the temporal accuracy of the data by adjusting for timing differences in recording brain signals.

**Spatial Smoothing**
Increasing the signal-to-noise ratio by smoothing the data. This is done using spatial filters that average the intensities of neighboring points.

**Temporal Filtering**
Removing noise and unrelated signals using temporal filters. These filters remove high-frequency noise and emphasize significant signals.

**Global Intensity Normalization**
Normalizing global intensities to reduce differences between scans. This step helps align and standardize different data sets for more reliable statistical analysis.

**Registration**
Aligning fMRI data with structural images for more accurate data matching. This involves aligning fMRI images with high-resolution structural images of the brain to facilitate precise analysis.

#### Data Processing

**General Linear Model (GLM)**
Using the General Linear Model to analyze fMRI data and identify active brain regions. This model helps analyze the correlation between brain activity and the tasks presented to subjects.

**Clustering**
Grouping data to identify patterns and correlated brain regions. This method helps identify clusters of brain activity and analyze spatial and temporal correlations.

**Statistical Inference**
Using statistical methods to analyze data and assess the validity and reliability of results. This includes statistical tests and random models to determine the significance of findings. Statistical analysis in fMRI aims to examine correlations, test hypotheses, and identify active brain regions based on recorded data.
