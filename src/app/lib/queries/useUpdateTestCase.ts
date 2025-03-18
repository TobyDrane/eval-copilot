import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/app/lib/api";
import { GET_TEST_CASES_FOR_METRIC_QUERY_KEY } from "@/app/lib/queries/useGetTestCasesForMetric";
import { UpdateTestCaseRequest } from "@/app/lib/api/testCases/update";

function useUpdateTestCase() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (request: UpdateTestCaseRequest) =>
      api.testCases.update(request),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_TEST_CASES_FOR_METRIC_QUERY_KEY],
      });
    },
  });
}

export { useUpdateTestCase };
