import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { Deal } from "../../types";

export default function DealListItem({ deal }: { deal: Deal }) {
  const { id, title } = deal;
  return (
    <Link href={{ pathname: "/deal/[id]", params: { id } }} asChild>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </Link>
  );
}
