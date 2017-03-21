angular.module('starter.services',[])
.service('WC', function(){
    return {
        WC: function(){
            var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                url: 'http://superbdc.com.br',
                consumerKey: 'ck_237dee453583e7f7ba0d613334ff14de67b4eab0',
                consumerSecret: 'cs_f77e64891dcc08847869c1811b43c49e447286ec'
            });
            return Woocommerce;
        }
}});