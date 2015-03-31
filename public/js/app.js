angular
  .module('manao', [
    'ui.router'
  ])
  // https://github.com/angular-ui/ui-router/wiki
  .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider, $stateProvider) {
    
    // '' means default/root state "/"
    $stateProvider.state('title', {
      url: '',
      templateUrl : "views/title.html",
    })
    .state('card', {
      url : '/card/:name',
      templateUrl : "views/card.html",
      controller: "CardController"
    })
    .state('list_all', {
      url : '/list_all',
      templateUrl : "views/list_all.html",
    });
  }])
  .controller('CardController', ['$scope','$state','CardService', function($scope,$state,CardService){
    // have cards
    // choose one at random
    // display cards
    // console.log(CardService);
    // var all_cards = CardService.all();
    // console.log('all_cards',all_cards);

    // check for card's :name param
    // if it doesn't exist, randomize
    if($state.params.name === ""){
      var random_card = CardService.randomCard();

      $state.go( 'card', { name : random_card.name } );
    }
    // if it does exist, get that card
    else{
      // get card by name thats in the url
      var the_card = CardService.getCard( $state.params.name );
      $scope.card = CardService.prepareQuestion( the_card );
      console.log('$scope.card',$scope.card);

    }

  }])
  .service('CardService', function(){
    // get all cards
    this.all = function () {
      return all_cards;
    }

    // get random card
    this.randomCard = function () {
      var randomIndex = Math.floor(Math.random() * all_cards.length);
      return all_cards[randomIndex];
    }
    // Decorator pattern adds properties to it
    // turning card into a question
    this.prepareQuestion = function (card){
      // get a random correct answer from card.options
      var randomIndex = Math.floor(Math.random() * card.options.length);

      // set the meaning value
      card.meaning = card.options[ randomIndex ].definition;

      // set the correct card
      for (var i = card.options.length - 1; i >= 0; i--) {
        card.options[i].correct = (i === randomIndex); /// evaluates to boolean
      };
      return card;
    }
    
    // get card by name
    this.getCard = function (name){
      var foundCard = false;

      // loop through all cards, looking for one that matches 'name'
      for (var i = all_cards.length - 1; i >= 0; i--) {
        if(all_cards[i].name === name){
          foundCard = all_cards[i];
          return foundCard;
        }
      };
      // return didn't find card, so false
      return foundCard;


    }

    var all_cards = [
    {
      name : "ahi",
      options : [
        {
          title : "ahi",
          definition : "fire"
        },        
        {
          title : "ʻahi",
          definition : "tuna fish"
        },
        {
          title : "pale ahi",
          definition : "flame retardant"
        }
      ]
    },
    {
      name : "ihi",
      options : [
        {
          title : "ihi",
          definition : "to tear off, remove"
        },        
        {
          title : "ʻihi",
          definition : "sacred"
        },
        {
          title : "hō ʻihi",
          definition : "flame retardant"
        }
      ]
    },
    {
      name : "aa",
      options : [
        {
          title : "ʻaʻa",
          definition : "to accept a challenge"
        },        
        {
          title : "ʻaʻā",
          definition : "to burn, blaze, glow"
        },
        {
          title : "aʻa",
          definition : "small root, rootlet, vein, artery, nerve, tendon, muscle."
        }
      ]
    },
    {
      name : "pupu",
      options : [
        {
          title : "pūpū",
          definition : "appetizer; formerly, the fish, chicken, or banana served with kava"
        },        
        {
          title : "pupū",
          definition : "to stall"
        },
        {
          title : "pupu",
          definition : "temporary small shelter"
        }
      ]
    },
    {
      name : "ua",
      options : [
        {
          title : "ua",
          definition : "rain"
        },        
        {
          title : "ʻuʻa",
          definition : "to ask, question, appeal, turn to for help or advice, query"
        }
      ]
    },
    {
      name : "ui",
      options : [
        {
          title : "uʻi",
          definition : "youthful, youthfully stalwart, heroic, handsome, pretty, beautiful, vigorous"
        },        
        {
          title : "ui",
          definition : "useless, unproductive, vain, to no profit, good-for-nothing, worn-out"
        }
      ]
    },
    {
      name : "kane",
      options : [
        {
          title : "kāne",
          definition : "male, husband, male sweetheart, man"
        },        
        {
          title : "kane",
          definition : "tinea, a fungus skin disease"
        }
      ]
    },
    {
      name : "wahine",
      options : [
        {
          title : "wahine",
          definition : "woman"
        },        
        {
          title : "wāhine",
          definition : "women"
        }
      ]
    },
    {
      name : "paina",
      options : [
        {
          title : "pāʻina",
          definition : "meal, dinner, small party with dinner"
        },        
        {
          title : "paina",
          definition : "lifting, swelling, or breaking, as waves"
        },
        {
          title : "paʻina",
          definition : "click, as the sound produced when clicking a computer mouse"
        }
      ]
    },
    {
      name : "kui",
      options : [
        {
          title : "kui",
          definition : "to string pierced objects, as flowers in a lei, or fish"
        },        
        {
          title : "kuʻi",
          definition : "to clash (as sound)"
        }
      ]
    },
    {
      name : "nene",
      options : [
        {
          title : "nene",
          definition : "a kind of shellfish"
        },        
        {
          title : "nēnē",
          definition : "hawaiian goose"
        }
      ]
    },
    {
      name : "haa",
      options : [
        {
          title : "haʻā",
          definition : "native trees"
        },        
        {
          title : "haʻa",
          definition : "a dance with bent knees, dancing; called hula after mid 1800s"
        }
      ]
    },
    {
      name : "ae",
      options : [
        {
          title : "aʻe",
          definition : "seeds of all (largest in the soapberry) are black, round, and used for leis"
        },        
        {
          title : "ʻae",
          definition : "to say yes"
        },
        {
          title : "ʻaʻe",
          definition : "tread upon, trespass"
        }
      ]
    },
    {
      name : "koko",
      options : [
        {
          title : "koko",
          definition : "blood; rainbow-hued"
        },        
        {
          title : "kokō",
          definition : "crow, cackle, of chickens"
        },
        {
          title : "kōkō",
          definition : "a carrying net, usually made of sennit, as used for hanging calabashes"
        }
      ]
    },
    {
      name : "mano",
      options : [
        {
          title : "mano",
          definition : "many, numerous, four thousand"
        },        
        {
          title : "manō",
          definition : "shark"
        },
        {
          title : "māno",
          definition : "dam, stream or water source"
        }
      ]
    },
    {
      name : "maka",
      options : [
        {
          title : "maka",
          definition : "presence, sight, view"
        },        
        {
          title : "māka ",
          definition : "mark, marker, blaze, target"
        },
        {
          title : "mākā",
          definition : "obsidian"
        }
      ]
    },
    {
      name : "mana",
      options : [
        {
          title : "māna",
          definition : "a chewed mass, as of kava for drinking, coconut flakes or kook nut for medicine"
        },        
        {
          title : "mānā",
          definition : "arid; desert"
        },
        {
          title : "mana",
          definition : "supernatural or divine power"
        }
      ]
    },
    {
      name : "ono",
      options : [
        {
          title : "ʻono",
          definition : "delicious"
        },        
        {
          title : "ono",
          definition : "a large mackerel type fish"
        }
      ]
    },
    {
      name : "naia",
      options : [
        {
          title : "naia",
          definition : "insecurely tied"
        },        
        {
          title : "naiʻa",
          definition : "porpoise, dolphin"
        }
      ]
    },
    {
      name : "kupuna",
      options : [
        {
          title : "kūpuna",
          definition : "ancestors"
        },        
        {
          title : "kupuna",
          definition : "ancestor, grandparent"
        }
      ]
    },
    {
      name : "kakau",
      options : [
        {
          title : "kakau",
          definition : "to leave imprints"
        },        
        {
          title : "kākau",
          definition : "to tattoo; tattooing"
        }
      ]
    },
    {
      name : "kau",
      options : [
        {
          title : "kāu",
          definition : "your, yours"
        },        
        {
          title : "kaʻu",
          definition : "my, mine"
        },
        {
          title : "kau",
          definition : "to put on, place on, lay on, as responsibility"
        }
      ]
    },
    {
      name : "kumu",
      options : [
        {
          title : "kumu",
          definition : "beginning, source, origin; teacher"
        },        
        {
          title : "kūmū",
          definition : "goatfish"
        }
      ]
    },
    {
      name : "leo",
      options : [
        {
          title : "leo",
          definition : "voice; to speak, make a sound"
        },        
        {
          title : "leʻo",
          definition : "A variety of taro that cannot be eaten either cooked or as fresh poi without throat irritation"
        }
      ]
    },
    {
      name : "kala",
      options : [
        {
          title : "kala",
          definition : "free, release, remove, unburden, absolve, let go"
        },        
        {
          title : "kālā",
          definition : "cash, currency, dollar, money"
        }
      ]
    },
    {
      name : "uka",
      options : [
        {
          title : "uka",
          definition : "inland, upland, towards the mountain, shoreward (if at sea)"
        },        
        {
          title : "ʻuka",
          definition : "wrinkles"
        },
        {
          title : "ʻukā",
          definition : "to gobble noisily, as a pig"
        }
      ]
    },
    {
      name : "makai",
      options : [
        {
          title : "mākaʻi",
          definition : "cardinal"
        },        
        {
          title : "makai",
          definition : "ocean"
        },
        {
          title : "mākai",
          definition : "needle"
        }
      ]
    },
    {
      name : "ulu",
      options : [
        {
          title : "ulu",
          definition : "to grow, increase, spread"
        },        
        {
          title : "ʻulu",
          definition : "the breadfruit"
        }
      ]
    },
    {
      name : "hoku",
      options : [
        {
          title : "Hoku",
          definition : "night of the full moon"
        },        
        {
          title : "hōkū",
          definition : "star"
        },
        {
          title : "hua hōkū",
          definition : "starfruit"
        }
      ]
    },
    {
      name : "paki",
      options : [
        {
          title : "pākī",
          definition : "to slam dunk, in basketball"
        },        
        {
          title : "pakī",
          definition : "to splash, spatter, squirt, spurt"
        }
      ]
    }
    ];
  }) 
  ;