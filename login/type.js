var account = /** @class */ (function () {
    function account(LastN, FirstN, UserN, EMail, Pass) {
        this.LastName = LastN;
        this.FirstName = FirstN;
        this.UserName = UserN;
        this.EMail = EMail || "";
        this.Password = Pass;
    }
    return account;
}());
