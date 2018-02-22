<template>

</template>

<script>
    const Menus = [
        {
          "name": "Best Cards of %M% %Y%",
          "title": "See the best credit card offers of %Y%",
          "url": "best-credit-cards",
          "icon": "icobc best-card-year"
        },
        {
          "name": "Travel Rewards Credit Cards",
          "title": "Compare the best travel rewards cards",
          "url": "travel",
          "icon": "icobc travel-card"
        },
        {
          "name": "Balance Transfer",
          "title": "See the best credit card offers of 2017",
          "url": "balance-transfer",
          "icon": "icobc cash-back"
        },
        {
          "name": "Test Menu 1",
          "child":[
            {
              "name": "Test menu child 1",
              "title": "See the best offers from Bank of America",
              "url": "bank-of-america",
              "icon": "bank-of-america"
            },
            {
              "name": "Test menu child 2",
              "title": "See the best offers from Bank of America",
              "url": "bank-of-america",
              "icon": "american-express"
            }
          ]
        },
        {
          "name": "Cash Back",
          "title": "See the best credit card offers of 2017",
          "url": "cash-back",
          "icon": "icobc balance-transfer"
        },
        {
          "name": "By Bank Issuer",
          "child": [
            {
              "name": "Bank of America",
              "title": "See the best offers from Bank of America",
              "url": "bank-of-america",
              "icon": "bank-of-america"
            },
            {
              "name": "American Express",
              "title": "See the best offers from Bank of America",
              "url": "bank-of-america",
              "icon": "american-express"
            },
            {
              "name": "Chase",
              "title": "See the best offers from Chase",
              "url": "chase",
              "icon": "chase"
            },
            {
              "name": "Citibank",
              "title": "See offers from Citibank",
              "url": "citi",
              "icon": "citibank"
            }
          ]
        }
      ]
    export default {
        name: "sidebar",
        props: {
            Menus: {
                type: Array,
                required: true
            }
        },
        methods: {
            generateMenu: function (Menus) {
                this.html.push(`<ul>`)
                Menus.forEach(menu => {
                    if (!menu.child) {
                        this.html.push(`<li>${menu.name}</li>` )
                    } else {
                        this.generateMenu(menu.child)
                    }
                })
                this.html.push(`</ul>`)
            }
        },
        mounted() {
            this.generateMenu(Menus)
        }
    };
</script>
