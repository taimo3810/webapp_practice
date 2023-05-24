import { useMemo } from "react";

import { useSearchRepositoriesQuery } from "@/graphql/__generated__/typesAndHooks";

import { Repository } from "@/components/Repository";

export const Top: React.FC = () => {
  const { error, data } = useSearchRepositoriesQuery({
    variables: {
      query: "org:opt-tech",
    },
  });

  const content: JSX.Element = useMemo(() => {
    if (error) {
      return <p>エラーが発生しました</p>;
    }

    if (!data?.search.nodes) {
      return <p>データが存在しません</p>;
    }

    return (
      <>
        {data.search.nodes
          .filter((repo): repo is NonNullable<typeof repo> => repo != null)
          .map((repo) => {
            if (repo.__typename != "Repository") return;
            return <Repository key={repo.id} {...repo} />;
          })}
      </>
    );
  }, [error, data]);

  return (
    <div>
      <h1>opt-tech リポジトリ一覧</h1>
      {content}
    </div>
  );
};
