import Iter "mo:core/Iter";

actor {
  public query ({ caller }) func getEmptyArray() : async [Nat] {
    [].values().toArray();
  };
};
