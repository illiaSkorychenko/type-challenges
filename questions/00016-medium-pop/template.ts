type Pop<T extends any[]> = T extends [...infer F, infer _] ? F : T
