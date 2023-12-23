/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {lazy, Suspense} from "react";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";
import {fetchOneProcesses} from "@/pages/Student/Application/requests/applicationApis.js";
import Loading from "@/components/Loading/Loading.jsx";
import useDownloader from "react-use-downloader";

const StepList = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/StepList/StepList.jsx"
  )
);

const StepText = lazy(() =>
  import(
    "@/pages/Student/Application/Process/StepForm/Steps/StepText/StepText.jsx"
  )
);

const StepForm = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const { stepTab } = useSelector((state) => state?.processes);

  const { data: currentProcess } = useQuery({
    queryKey: ["one_process", stepTab?._id],
    queryFn: () => fetchOneProcesses(stepTab?._id),
    enabled: !!stepTab?._id,
  });
  return (
    <div>
      <div>
        {currentProcess?.type && currentProcess?.type === "List" && (
          <Suspense fallback={<Loading />}>
            <StepList info={currentProcess} />
          </Suspense>
        )}
        {currentProcess?.type && currentProcess?.type !== "List" && (
          <Suspense fallback={<Loading />}>
            <StepText info={currentProcess} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default StepForm;
