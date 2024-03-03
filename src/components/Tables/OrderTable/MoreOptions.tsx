import { useShowOrder } from "@/Hooks/useShowOrder";
import { Button } from "@/components/ui/button";
import { IOrder } from "@/lib/db/models/order.model";
import { MoreHorizontal } from "lucide-react";
import React from "react";

const MoreOptions = ({ order }: { order: IOrder }) => {
    const { onOpen } = useShowOrder();

  return (
    <Button variant="ghost" onClick={() => onOpen(order)} size="icon">
      <MoreHorizontal />
    </Button>
  );
};

export default MoreOptions;
