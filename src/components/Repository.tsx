import { useAddStarMutation } from "@/graphql/__generated__/typesAndHooks";

type Props = {
  id: string;
  name: string;
};

export const Repository: React.FC<Props> = ({ id, name }) => {
  const [addStar] = useAddStarMutation({
    variables: {
      id,
    },
  });

  return (
    <div>
      {id}: {name}
      <button onClick={() => addStar()}>add start</button>
    </div>
  );
};
