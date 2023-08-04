import { useCallback } from "react";
import { useShapesStore } from "../useShapesStore";
import { useToolStore } from "../useToolStore";

export const useShape = () => {
  const updateShapeValue = useCallback((id: string, value: string) => {
    const currentTool = useToolStore.getState().currentTool;
    useShapesStore.getState().setShapeId(id, {
      id: id,
      value: value,
      type: currentTool,
    });
  }, []);

  return { updateShapeValue };
};
