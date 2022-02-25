export default function useMutation(query, variables) {
  const [mutate, { data, error, loading }] = useSWR(query, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(variables),
  });

  return [mutate, { data, error, loading }];
}
