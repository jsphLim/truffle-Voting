

App = {
    web3Provider: null,
    contracts: {},

    initWeb3: function () {
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
        } else {
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        }
        web3 = new Web3(App.web3Provider);
         App.initContract();
    },

    initContract: function () {

        $.getJSON('Voting.json', function (data) {
            var Artifact = data;

            App.contracts.Voting = TruffleContract(Artifact);

            App.contracts.Voting.setProvider(App.web3Provider);
            console.log(App.contracts.Voting);
            App.setCounts();
        });
         App.bindEvents();
    },

    setCounts: function () {
        var candidates = {"zhang": "one", "bin": "two", "cheng": "three"};
        var candidateNames = Object.keys(candidates);
        for (var i = 0; i < candidateNames.length; i++) {
            App.update(candidateNames[i]);
        }
    },

    bindEvents: function () {
        $(document).on('click', '.btn-vote', App.handleVoting);
    },

    update: function (name) {
        var Instance;
        var candidates = {"zhang": "one", "bin": "two", "cheng": "three"};

        App.contracts.Voting.deployed().then(function (instance) {
            Instance = instance;
                return  Instance.totalVotesFor.call(name);

            }).then(function (val) {
                console.log(val.toNumber());
            $("#" + candidates[name]).html(val.toNumber());
        }).catch(function (err) {
            console.log(err.message);
        });
    },

    handleVoting: function () {

        var VotingInstance;
        var candidateName = $("#candidate").val();
        console.log(candidateName);
        // 获取用户账号
        web3.eth.getAccounts(function (error, accounts) {
            if (error) {
                console.log(error);
            }

            var account = accounts[0];
            console.log(accounts);

            App.contracts.Voting.deployed().then(function (instance) {
                VotingInstance = instance;

                return VotingInstance.voteForCandidate(candidateName, {from: account});
            }).then(function (result) {
                return App.update();
            }).catch(function (err) {
                console.log(err.message);
            });
        });
    }

};

$(function () {
    $(window).load(function () {
        App.initWeb3();
    });
});
