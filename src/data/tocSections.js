export const lowLevelRepresentationTOC = {
  title: "lowLevelRepresentation.sections.title",
  items: [
    {
      id: "why-computers",
      label: "lowLevelRepresentation.sections.whyComputers"
    },
    {
      id: "bits-bytes",
      label: "lowLevelRepresentation.sections.bitsBytes"
    },
    {
      id: "numbers-to-symbols",
      label: "lowLevelRepresentation.sections.numbersToSymbols"
    },
    {
      id: "data-representation",
      label: "lowLevelRepresentation.sections.dataRepresentation",
      open: true,
      children: [
        {
          id: "numeric-types",
          label: "lowLevelRepresentation.sections.numericTypes"
        },
        {
          id: "char-type",
          label: "lowLevelRepresentation.sections.charType"
        },
        {
          id: "conventions",
          label: "lowLevelRepresentation.sections.conventions",
          children: [
            {
              id: "positional-coding",
              label: "lowLevelRepresentation.sections.positionalCoding"
            }
          ]
        }
      ]
    }
  ]
};

export const algorithmAnalysisTOC = {
  title: "algorithmAnalysis.sections.title",
  items: [
    {
      id: "why-this-course",
      label: "algorithmAnalysis.sections.whyThisCourse"
    },
    {
      id: "fundamentals",
      label: "algorithmAnalysis.sections.fundamentals",
      open: true,
      children: [
        {
          id: "algorithms",
          label: "algorithmAnalysis.sections.algorithms"
        },
        {
          id: "describing-algorithms",
          label: "algorithmAnalysis.sections.describingAlgorithms"
        }
      ]
    },
    {
      id: "algorithm-evaluation",
      label: "algorithmAnalysis.algorithm_evaluation.title",
      open: true,
      children: [
        {
          id: "time-measurement",
          label: "algorithmAnalysis.sections.timeMeasurement"
        },
        {
          id: "big-o-notation",
          label: "algorithmAnalysis.sections.bigONotation"
        }
      ]
    }
  ]
};
