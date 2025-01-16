async function SampleWorkflow(workflowCtx, portal) {
  return {
    "Guide": {
      name: "Introduction Guide",
      stepCallback: async () => {
        return workflowCtx.showContent(`## Introduction
  This is a guided walkthrough that will showcase how to add two numbers. Once you go through the walkthrough details click on **Next** to Start with Step 1.
  
  ## Walkthrough Details
  ### Step 1: Calculate
  1. In **Step 1**, you will find the SUM of two numbers i.e. **5** and **10**. The operation will be **SUM**, and you will enter the two numbers to be added in variables **X** and **Y**.
  2. After that, click on the **Try it Out** button to get the added amount.`);
      }
    },
    "Step 1": {
      name: "",
      stepCallback: async () => {
        return workflowCtx.showEndpoint({
          description:
            "This endpoint will be used to calculate the SUM of the two numbers **5** and **10**.",
          endpointPermalink: "$e/Simple%20Calculator/Calculate",
          args: {
            x: 5,
            y: 10,
            operation: "SUM",
          },
          verify: (response, setError) => {
            if (response.StatusCode == 200) {
              return true;
            } else {
              setError(
                "API Call wasn't able to get a valid response. Please try again."
              );
              return false;
            }
          },
        });
      },
    },
  };
}
