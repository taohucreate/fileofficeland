var VERSION = "1.9";var content = {
    version: VERSION,
    unit : 0,
    unit_class : ['intern','junior','senior','leader','manager','boss'],
    coffee : {
        intern : {
            1 : 1,
            2 : 1,
        },
        junior : {
            1 : 1,
            2 : 1,
            3 : 1,
        },
        senior : {
            1 : 1,
            2 : 1,
            3 : 1,
            4 : 1,
        },
        leader : {
            1 : 1,
            2 : 1,
            3 : 1,
            4 : 1,
            5 : 1,
        },
        manager : {
            1 : 1,
            2 : 1,
            3 : 1,
            4 : 1,
            5 : 1,
            6 : 1,
        }
    },
    init: function() {
        // alert('bot car is running.'+API_KEY);
        setTimeout(function(){
            location.reload();
        },3600000);
    },
    url : 'https://gamefibot.io/captcha-'+API_KEY,
    id: false,
    credit : false,
    avalible : 0,
    account : false,
    stop : true,
    sending_image : false,
    loop: function(index) {
        if(content.stop) {
            setTimeout(function(){
                content.loop();
            },1000);
            return;
        }
        console.log(location.href,index);
        if(index === undefined) {
            index = 0;
        }
        if(content.credit <= 0) {
            //content.event.stop();
            setTimeout(function(){
                content.loop();
            },1000);
            return;
        }
        if(location.href == 'https://officeland.io/game') {
            if(document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-red-600 hover:bg-red-800 text-white text-base sm:text-xl px-8 flex justify-center items-center gap-2 ease-linear transition-all duration-150').length) {
                document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-red-600 hover:bg-red-800 text-white text-base sm:text-xl px-8 flex justify-center items-center gap-2 ease-linear transition-all duration-150')[0].click();
            }
            setTimeout(function(){
                content.loop();
            },1000);
            return;
        }

        if(index && index > 600) {
            if(document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-700 hover:bg-blue-800 text-white text-sm px-2 py-2 flex justify-center items-center gap-2 ease-linear transition-all duration-150').length) {
                document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-700 hover:bg-blue-800 text-white text-sm px-2 py-2 flex justify-center items-center gap-2 ease-linear transition-all duration-150')[0].click();
            }
            setTimeout(function(){
                content.loop();
            },1000);
            return;
        }
        if(location.href == 'https://officeland.io/game/workspace/publicspace') {


            if(document.getElementsByClassName('absolute inset-0 flex justify-center items-center gap-1 text-3xl bg-black bg-opacity-80 rounded-md').length) {
                setTimeout(function(){
                    content.loop(index+1);
                },1000);
                return;
            }
            console.log('select_players');
            var unit = document.getElementsByClassName('card-id cursor-pointer').length;
            document.getElementById('_hxh_avalible').textContent = unit;
            content.event.select_player(function(){
                console.log('select_player');
                content.event.check_coffee(function(){
                    console.log('check_coffee');
                    content.event.finish(function(){
                        console.log('finish');
                        content.event.claim(function(){
                            setTimeout(function(){
                                content.loop(index+1);
                            },1000);
                        });
                    });
                });
            });
            return;
        }
        if(location.href.split('?')[0] == 'https://officeland.io/game/workspace') {
            console.log('test');
            var btn_play = document.getElementsByClassName('text-3xl flex justify-center items-center gap-5 text-green-500 hover:text-yellow-400 bg-black px-2 py-1 border-2 border-green-900 hover:border-yellow-400 border-dashed  rouned-md w-full bg-opacity-80');
            if(btn_play.length) {
                console.log('tests');
                btn_play[0].click();
                setTimeout(function(){
                    content.loop(index+1);
                },1000);
                return;
            }
        }

        setTimeout(function(){
            content.loop(index+1);
        },1000);
    },

    last_claim : 0,
    event: {
        claim : function(callback) {
            console.log('claim');
            if(!document.getElementById('_hxh_claim').checked) {
                if(callback) {
                    callback();
                }
                return;
            }
            var btn_claim = document.getElementsByClassName('front text-xs md:text-base uppercase font-bold border-2 border-blueGray-500 bg-yellow-500 hover:bg-yellow-800 text-white px-8 flex justify-center items-center ease-linear transition-all duration-150');
            if(!btn_claim.length) {
                if(callback) {
                    callback();
                }
                return;
            }

            if((Date.now() - content.last_claim) < 3600000) {
                if(callback) {
                    callback();
                }
                return;
            }

            btn_claim[0].click();
            console.log('claim start');
            content.event.claim_start(function(){
                content.last_claim = Date.now();
                content.event.back(callback);
            });
        },
        claim_start : function(callback,index,id) {
            if(!document.getElementById('_hxh_claim').checked) {
                if(callback) {
                    callback();
                }
                return;
            }
            var btn = document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-green-500 hover:bg-green-800 text-white text-base px-2 flex justify-center items-center ease-linear transition-all duration-150');

            if(!document.getElementsByClassName('text-sm w-full flex justify-between').length) {
                setTimeout(function(){
                    content.event.claim_start(callback,index+1);
                },1000);
                return;
            }

            var total = +document.getElementsByClassName('text-sm w-full flex justify-between')[0].children[0].textContent.replace('Total: ','');
            console.log('total claim',total);
            if(document.getElementsByClassName('absolute inset-0 flex justify-center items-center gap-1').length) {
                setTimeout(function(){
                    content.event.claim_start(callback,index+1);
                },1000);
                return;
            }
            if(!total) {
                if(callback) {
                    callback();
                }
                return;
            }
            if(index === undefined) {
                index = 0;
            }

            if(!btn.length) {
                setTimeout(function(){
                    content.event.claim_start(callback,index+1);
                },1000);
                return;
            }
            if(!document.getElementsByClassName('font-bold  text-green-600').length) {
                if(callback) {
                    callback();
                }
                return;
            }
            var check_id = document.getElementsByClassName('col-span-12 text-xs text-gray-400')[0].textContent;

            if(check_id !== id) {
                btn[0].click();
                id = check_id;
            }
            setTimeout(function(){
                content.event.claim_start(callback,index,id);
            },1000);
            return;
        },
        back : function(callback) {
            document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-700 hover:bg-blue-800 text-white text-sm px-2 py-2 flex justify-center items-center gap-2 ease-linear transition-all duration-150')[0].click();
            setTimeout(function(){
                if(callback) {
                    callback();
                }
            },1000);
        },

        sleep : function(callback) {
            console.log('set sleep');
            var btn = document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-400 hover:bg-blue-600 text-sm lg:text-base text-white px-2 py-2 flex justify-center items-center ease-linear transition-all duration-150');
            if(!btn.length) {
                if(callback) {
                    callback();
                }
                return;
            }
            btn[0].click();
            content.event.wait_assign(callback,true);
        },
        use_coffee : function(index,css,callback) {

            if(content.stop) {
                if(callback) {
                    callback();
                }
                return;
            }

            if(!document.getElementsByClassName('card-id cursor-pointer').length) {
                if(callback) {
                    callback();
                }
                return;
            }
            if(!document.getElementsByClassName('card-id cursor-pointer')[index]) {
                if(callback) {
                    callback();
                }
                return;
            }
            console.log('use_coffee',index);
            document.getElementsByClassName('card-id cursor-pointer')[index].click();


            // if(callback) {
            //     callback();
            // }
            content.event.load_coffee(css,callback);
        },
        load_coffee : function(css,callback,index) {

            var buy_coffee = document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-green-500 hover:bg-green-800 text-white px-4 flex justify-center items-center text-sm ease-linear transition-all duration-150');
            var cannot_buy_coffee = document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-gray-500 hover:bg-gray-800 text-white px-4 flex justify-center items-center text-sm ease-linear transition-all duration-150');
            // if(cannot_buy_coffee.length) {
            //     setTimeout(function(){
            //         if(callback) {
            //             callback();
            //         }
            //     },1000);
            //     return;
            // }
            if(index > 60) {
                location.reload();
            }
            if(index === undefined) {
                index = 0;
            }
            if(!buy_coffee.length) {
                setTimeout(function(){
                    content.event.load_coffee(css,callback,index+1);
                },1000);
                return;
            }
            buy_coffee[0].click();
            content.event.choose_coffee(css,callback);
        },
        choose_coffee : function(css,callback) {
            var btn = document.getElementsByClassName('h-full bg-green-500 hover:bg-green-800 rounded-b-lg md:rounded-bl-none md:rounded-r-lg uppercase w-full');
            if(btn.length != 5) {
                setTimeout(function(){
                    content.event.choose_coffee(css,callback);
                },1000);
                return;
            }
            var coffee = +document.getElementById('_hxh_coffee_'+css).value;
            // console.log('use coffee',css,btn);
            if(coffee <= 0) {
                document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-700 hover:bg-blue-800 text-white text-sm px-2 py-2 flex justify-center items-center gap-2 ease-linear transition-all duration-150')[0].click();
                if(callback) {
                    callback();
                }
                return;
            }
            btn[coffee-1].click();
            content.event.wait_coffee(callback);
        },
        wait_coffee : function(callback) {
            var btn_buy = document.getElementsByClassName('h-full bg-green-500 hover:bg-green-800 rounded-b-lg md:rounded-bl-none md:rounded-r-lg uppercase w-full');
            if(btn_buy.length) {
                setTimeout(function() {
                    content.event.wait_coffee(callback)
                },1000);
                return;
            }
            delete localStorage['_avalible_coofie'];
            document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-700 hover:bg-blue-800 text-white text-sm px-2 py-2 flex justify-center items-center gap-2 ease-linear transition-all duration-150')[0].click();

            setTimeout(function(){
                if(callback) {
                    callback();
                }
            },3000);
        },
        check_coffee : function(callback,index) {

            if(content.stop) {
                if(callback) {
                    callback();
                }
                return;
            }
            if(index === undefined) {
                index = 0;
            }

            var ids = document.getElementsByClassName('text-center bg-black w-full border border-blueGray-500 relative cursor-pointer');
            if(index >= ids.length) {
                // console.log('chk_cooffee',ids,index);
                if(callback) {
                    callback();
                }
                return;
            }
            var id = document.getElementsByClassName('text-center bg-black w-full border border-blueGray-500 relative cursor-pointer')[index].textContent.replace('#','');

            if(document.getElementsByClassName('grid grid-cols-12 w-full border-r border-l border-b border-blueGray-500 bg-black')[index].children[0].children[0].className == 'bg-opacity-70 bg-blue-300') {
                if(callback) {
                    callback();
                }
                return;
            }

            content.event.get_class(id,function(css){
                var status = +document.getElementById('_hxh_coffee_'+css).value;
                if(!status) {
                    setTimeout(function(){
                        content.event.check_coffee(callback,index+1);
                    });
                    return;
                }
                content.event.get_coffee(id,function(status){
                    // console.log('coffee',status);
                    if(!status) {
                        setTimeout(function(){
                            content.event.check_coffee(callback,index+1);
                        });
                        return;
                    }
                    content.event.use_coffee(index,css,function(){
                        setTimeout(function(){
                            content.event.check_coffee(callback,index+1);
                        });
                    });
                });
            });

        },

        get_class : function(id,callback) {
            var dt = localStorage['_unit'];
            if(dt) {
                dt = JSON.parse(dt);
                if(dt[id]) {
                    if(callback) {
                        callback(dt[id]);
                        return;
                    }
                }
            }

            var account = JSON.parse(localStorage['wax-account-officelandio-list']).account;
            var url = 'https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=officelandio&owner='+account+'&order=desc&sort=updated&limit=1000&template_data.type=staff';
            content.fs.curl(url,function(rest){
                // console.log(rest);

                var data = JSON.parse(rest);
                var dt = {};
                for(var key in data['data']) {
                    var val = data['data'][key];
                    dt[val.asset_id] = val.data['rarity'];
                }

                localStorage['_unit'] = JSON.stringify(dt);

                if(callback) {
                    callback(dt[id]);
                }

            });
        },

        get_coffee : function(id,callback,retry) {
            var dt = localStorage['_avalible_coofie'];
            if(dt) {
                dt = JSON.parse(dt);
                if((Date.now() - dt.time) < 1800000) {
                    if(dt.data[id] !== undefined) {
                        if(callback) {
                            callback(dt.data[id]);
                        }
                        return;
                    }
                }
            }

            var account = JSON.parse(localStorage['wax-account-officelandio-list']).account;

            var server = document.getElementsByClassName('block appearance-none w-full bg-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline')[0].value;
            var url = ''+server+'/v1/chain/get_table_rows';
            var data = {
                code: "officegameio",
                index_position: 3,
                json: true,
                key_type: "name",
                limit: 30,
                lower_bound: account,
                reverse: false,
                scope: "officegameio",
                show_payer: false,
                table: "taskassign",
                upper_bound: account,
            }
            url = 'https://gamefibot.io/?action=officeland&get_coffee=1&account='+account;
            content.fs.curl(url,function(rest){

                // console.log(rest);
                // retur
                if(!rest) {
                    if(retry === undefined) {
                        retry = 0;
                    }
                    if(retry > 3) {
                        location.reload();
                        return;
                    }
                    setTimeout(function(){
                        content.event.get_coffee(id,callback,retry + 1);
                    },2000);
                    return;
                }

                rest = JSON.parse(rest);
                var dt = {
                    time : Date.now(),
                    data : {},
                };
                for(var key in rest['rows']) {
                    var val = rest['rows'][key];
                    dt.data[val.asset_id] = val.item_used;
                }
                localStorage['_avalible_coofie'] = JSON.stringify(dt);
                if(callback) {
                    callback(dt.data[id]);
                }
            });
        },
        set_class : function(el) {
            var val = +el.value;
            var minmax = el.placeholder.replace('(','').replace(')','').split('-');
            if(!+val) {
                el.value = '';
            }
            if(val < +minmax[0]) {
                el.value = '';
            }
            if(val > +minmax[1]) {
                el.value = '';
            }
            localStorage[el.id] = el.value;
        },
        set_coffee : function(el) {
            if(+el.value > 5) {
                el.value = '';
            }
            if(+el.value < 1) {
                el.value = '';
            }
            if(!+el.value) {
                el.value = '';
            }
            localStorage[el.id] = el.value;
        },
        set_sleep : function(el) {
            if(+el.value > 100) {
                el.value = '';
            }
            if(+el.value < 1) {
                el.value = '';
            }
            if(!+el.value) {
                el.value = '';
            }
            localStorage[el.id] = el.value;
        },
        set_claim : function() {
            localStorage._xhx_claim = document.getElementById('_hxh_claim').checked ? 1 : 0;
        },
        finish : function(callback,clicked) {
            // var fin = document.getElementsByClassName('fas fa-clipboard-check spin-icon');



            var fin_all = document.getElementsByClassName('front text-xs md:text-base uppercase font-bold border-2 border-blueGray-500 bg-green-500 hover:bg-green-800 text-white px-8 flex justify-center items-center ease-linear transition-all duration-150');

            console.log('fin',fin_all.length,clicked);
            if(fin_all.length == 1) {
                if(callback){
                    callback();
                }
                return;
            }


            if(fin_all[0].id) {
                if(fin_all[0].id == '_hxh_start_bt') {
                    if(callback){
                        callback();
                    }
                    return;
                }
            }
            if(document.getElementsByClassName('absolute inset-0 flex justify-center items-center gap-1 text-3xl bg-black bg-opacity-80 rounded-md').length) {
                setTimeout(function() {
                    content.event.finish(callback);
                },1000);
                return;
            }
            if(clicked === undefined || clicked > 60) {


                clicked = 0;
                setTimeout(function() {
                    fin_all[0].click();
                    content.event.finish(callback,clicked+1);
                },1000);
                return;
            }
            // console.log(fin_all,clicked);
            if(document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-700 hover:bg-blue-800 text-white text-sm px-2 py-2 flex justify-center items-center gap-2 ease-linear transition-all duration-150').length==5) {
                document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-700 hover:bg-blue-800 text-white text-sm px-2 py-2 flex justify-center items-center gap-2 ease-linear transition-all duration-150')[3].click();

                setTimeout(function() {
                    content.event.finish(callback,clicked+1);
                },1000);
                return;
            }
            setTimeout(function() {
                content.event.finish(callback,clicked+1);
            },1000);

        },
        select_player : function(callback) {
            console.log('select_player2');
            if(content.stop) {
                if(callback) {
                    callback();
                }
                return;
            }
            if(location.href != ('https://officeland.io/game/workspace/publicspace')) {
                if(callback) {
                    callback();
                }
                return;
            }
            var unit = document.getElementsByClassName('col-span-6 text-white hover:text-blue-500');
            if(!unit.length) {
                if(callback) {
                    callback();
                }
                return;
            }
            document.getElementsByClassName('col-span-6 text-white hover:text-blue-500')[0].click();
            content.event.assign(callback);

        },

        assign : function(callback,index) {
            console.log('assign');
            if(index === undefined) {
                index = 0;
            }


            if(document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-red-500 hover:bg-red-800 text-white px-16 w-full flex justify-center items-center ease-linear transition-all duration-150').length){
                document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-700 hover:bg-blue-800 text-white text-sm px-2 py-2 flex justify-center items-center gap-2 ease-linear transition-all duration-150')[0].click();
                setTimeout(function(){
                    if(callback) {
                        callback();
                    }
                },1000);
                return;
            }
            var assign = document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-red-600 hover:bg-red-800 text-sm lg:text-base text-white px-16 flex justify-center items-center ease-linear transition-all duration-150');


            if(!assign.length) {
                if(index > 30) {
                    if(!document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-700 hover:bg-blue-800 text-white text-sm px-2 py-2 flex justify-center items-center gap-2 ease-linear transition-all duration-150').length) {
                        location.reload();
                    }

                    document.getElementsByClassName('front uppercase font-bold border-2 border-blueGray-500 bg-blue-700 hover:bg-blue-800 text-white text-sm px-2 py-2 flex justify-center items-center gap-2 ease-linear transition-all duration-150')[0].click();
                    setTimeout(function(){
                        if(callback) {
                            callback();
                        }
                    },1000);
                    return;
                }

                setTimeout(function(){
                    content.event.assign(callback,index+1);
                },1000);
                return;
            }





            var id = location.href.split('/');
            id = id[id.length-1].split('?')[0];

            content.event.get_class(id,function(unit_class){
                content.event.wait_rate(function(rate) {
                    var sleep = 10;
                    if(localStorage['_hxh_sleep_'+unit_class] !== undefined) {
                        if(!isNaN(localStorage['_hxh_sleep_'+unit_class])) {
                            sleep = +localStorage['_hxh_sleep_'+unit_class];
                        }
                    }
                    console.log('assign ',rate,sleep);
                    if(rate < sleep) {
                        console.log('set sleep');
                        content.event.sleep(function(){
                            if(callback) {
                                callback();
                            }
                        });
                        return;
                    }
                    console.log('set assign');
                    // return;
                    var assing_num = assign.length-1;
                    unit_class = unit_class.toLowerCase();
                    if(document.getElementById('_hxh_class_'+unit_class) && +document.getElementById('_hxh_class_'+unit_class).value) {
                        assing_num = document.getElementById('_hxh_class_'+unit_class).value-1;
                        if(assing_num >= assign.length) {
                            assing_num = assign.length-1;
                        }
                    }

                    // content.event.used();
                    assign[assing_num].click();

                    delete localStorage['_avalible_coofie'];
                    content.event.wait_assign(callback);
                });
            });
        },
        wait_rate : function(callback) {
            // var rate = document.getElementsByClassName('flex justify-between items-center gap-1')[0].getElementsByClassName('text-orange-700')[0].textContent;
            var rate =  document.getElementsByClassName('flex justify-between items-center gap-1')[0].getElementsByTagName('span')[1].textContent;
            if(rate.indexOf('%') < 0) {
                setTimeout(function(){
                    content.event.wait_rate(callback);
                },1000);
                return;
            }
            rate = +rate.replace('%','');
            if(callback) {
                callback(rate);
            }
        },
        used : function(callback) {
            if(!document.getElementsByClassName('text-center bg-black w-full border border-blueGray-500 relative cursor-pointer').length) {
                if(callback) {
                    callback();
                }
                return;
            }
            var id = document.getElementsByClassName('text-center bg-black w-full border border-blueGray-500 relative cursor-pointer')[0].textContent.replace('#','');
            content.event.get_class(id,function(css){
                var account = JSON.parse(localStorage['wax-account-officelandio-list']).account;
                var url = content.url + '?play=1&get_used=1&game=officeland&account='+account+'&css='+css;
                var x = content.fs.curl(url, function(rest) {
                    // console.log(url,rest);
                    rest = JSON.parse(rest);
                    content.event.set_account(rest.account);
                    if (rest.credit && rest.credit == 1) {
                        content.credit = rest.credit;
                    }

                    if(document.getElementById('_hxh_credit')) {
                        document.getElementById('_hxh_credit').textContent = rest.credit;
                    }
                    if(document.getElementById('_hxh_used')) {
                        document.getElementById('_hxh_used').textContent = rest.used.credit;
                    }
                    if(callback) {
                        callback(rest);
                    }
                });
            });
        },
        wait_assign : function(callback,sleepmode,index) {
            if(location.href == 'https://officeland.io/game/workspace/publicspace') {
                if(!sleepmode) {
                    content.event.used();
                }
                if(callback) {
                    callback();
                }
                return;
            }
            if(index === undefined) {
                index = 0;
            }
            if(index > 60) {
                location.reload();
                return;
            }
            setTimeout(function(){
                content.event.wait_assign(callback,sleepmode,index+1);
            },1000);
        },

        create_ui : function() {
            var div = document.createElement('div');
            div.setAttribute('style','z-index: 99999;width: 215px;height: 440px;background: #ffffff;position: fixed;right: 100px;bottom: 110px;border: solid black;color: #544141;border-radius: 10px;padding: 5px;');
            var html =
                "<h6 style='color:black'><center>GamefiBot v "+content.version+"</center></h6>" +
                "Credit : <b id=\"_hxh_credit\" style=\"color: #2121ff;border-radius: 5px;padding: 1px;\">999</b>\n" +
                "<a href='https://t.me/gamefibot_bot' target='_blank'>Refill</a>" +
                "<br />\n" +
                "Used : <b id=\"_hxh_used\" style=\"color: #2121ff;border-radius: 5px;padding: 1px;\">0</b>\n" +
                "<br />\n" +
                "Total unit : <b id='_hxh_avalible'>0</b> \n" +
                "<br />\n" +

                "<label><input type='checkbox' id='_hxh_claim' onchange='document._hunterxhunter.event.set_claim()' /> : Auto reward</label> \n" +
                "<br />\n" +
                "<div style=\"margin: 10px 25px;width: 138px;\">\n" +
                '<div id="_hxh_start_bt" onclick="document._hunterxhunter.event.start()" style="user-select: none; -ms-user-select: none; -moz-user-select: none; width: 10px;float: left;margin-left: -15px;" class="front text-xs md:text-base uppercase font-bold border-2 border-blueGray-500 bg-green-500 hover:bg-green-800 text-white px-8 flex justify-center items-center ease-linear transition-all duration-150" >Start</div>' +
                '<div id="_hxh_stop_bt" onclick="document._hunterxhunter.event.stop()" style="user-select: none; -ms-user-select: none; -moz-user-select: none; width: 15px;float: right;" class="front text-xs md:text-base uppercase font-bold border-2 border-blueGray-500 bg-yellow-500 hover:bg-yellow-800 text-white px-8 flex justify-center items-center ease-linear transition-all duration-150">Stop</div>' +
                "</div>\n" +
                '<table style="width:100%">' +
                '<thead><tr><th>CPU</th><th>NET</th><th>RAM</th></tr></thead>' +
                '<tbody style="text-align:center;"><tr><td id="_h_cpu">??%</td><td id="_h_net">??%</td><td id="_h_ram">??%</td></tbody>' +
                '</table>' +
                '<table>'+
                '<thead><tr><th> </th><th>💼</th><th>🛏️</th><th>☕</th></tr></thead>' +
                '{tr}' +
                '</table>' +
                "<center><a href='//GamefiBot.io' target='_blank'>GamefiBot.io</a></center>";

            var txt = '';
            for(var key in content.unit_class) {
                var val = content.unit_class[key];

                txt += '<tr style="border: solid black 1px">';
                txt += '<td style="text-align: right; border: solid black 1px;white-space: nowrap;"> {class} </td>'.replace(/{class}/g,val);
                txt += '<td> <input id="_hxh_class_{class}"autocomplete="off" onchange="document._hunterxhunter.event.set_class(this)" type="text" style="width: 100%;text-align: center;background: #cccccc;" value="" placeholder="(1-{key2})"></td>'
                    .replace(/{class}/g,val)
                    .replace(/{key2}/g,+key+2)
                ;
                txt += '<td style="text-align:center;"><input id="_hxh_sleep_{class}"autocomplete="off" onchange="document._hunterxhunter.event.set_sleep(this)" type="text" style="width: 100%;text-align: center;background: #cccccc;" value="" placeholder="10"></td>'.replace(/{class}/g,val);
                txt += '<td style="text-align:center;"><input id="_hxh_coffee_{class}"autocomplete="off" onchange="document._hunterxhunter.event.set_coffee(this)" type="text" style="width: 100%;text-align: center;background: #cccccc;" value="" placeholder="(1-5)"></td>'.replace(/{class}/g,val);
                txt += '</tr>';
            }
            html = html.replace('{tr}',txt);

            div.innerHTML = html;
            document.body.appendChild(div);
        },
        start : function() {
            content.stop = false;
            // document.getElementById('_hxh_start_bt').setAttribute('disabled','disabled');
            document.getElementById('_hxh_start_bt').style.background = 'gray';
            document.getElementById('_hxh_stop_bt').style.background = '';
            localStorage['_xhx_stop'] = content.stop;
        },
        stop : function() {
            content.stop = true;
            localStorage['_xhx_stop'] = content.stop;

            document.getElementById('_hxh_start_bt').style.background = '';
            document.getElementById('_hxh_stop_bt').style.background = 'gray';
        },
        get_credit: function(callback) {
            var account = JSON.parse(localStorage['wax-account-officelandio-list']).account;
            var url = content.url + '?get_credit=1&get_used=1&account='+account+'&game=officeland';
            var x = content.fs.curl(url, function(rest) {
                // console.log(url,rest);
                rest = JSON.parse(rest);
                content.event.set_account(rest.account);
                if (rest.success && rest.success == 1) {
                    content.credit = rest.credit;
                }
                if(callback) {
                    callback(rest);
                }
                setTimeout(function(){
                    content.event.get_credit();
                },300000);
            });
        },
        set_account : function(account) {
            content.account = account;
            document.getElementById('_h_cpu').textContent = (Math.floor(account.cpu.used / account.cpu.max*10000)/100) + '%';
            document.getElementById('_h_ram').textContent = (Math.floor(account.ram.used / account.ram.max*10000)/100) + '%';
            document.getElementById('_h_net').textContent = (Math.floor(account.net.used / account.net.max*10000)/100) + '%';
        },
        get_captcha: function(callback) {
            
            var url = content.url + '?id='+content.id;
            var x = content.fs.curl(url, function(rest) {
                rest = JSON.parse(rest);
                if (rest.status && rest.status == 1) {
                    if (callback) {
                        callback(rest.request);
                    }
                    return;
                }
                setTimeout(function() {
                    content.event.get_captcha(callback);
                }, 1000);
            });
        },
        get_svg: function(callback) {
            if (!document.querySelector('svg')) {
                return;
            }
            var svg = document.querySelector('svg').outerHTML;
            content.fs.svg2png(svg).then(callback);
        },

    },
    fs: {
        curl: function(url, callback, post) {
            if (post) {
                try {
                    const xhttp = new XMLHttpRequest();
                    xhttp.onload = function() {
                        if (callback) {
                            callback(this.responseText);
                        }
                    }
                    xhttp.open("POST", url, true);
                    xhttp.setRequestHeader("Content-type", "application/json");
                    xhttp.send(post);
                } catch (e) {
                    if (callback) {
                        callback(false);
                    }
                }
                return;
            }

            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                if (callback) {
                    callback(this.responseText);
                }
            }
            xhttp.open("GET", url);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send();
            return xhttp;
        },
        svg2png: function(svgText, margin, fill) {
            // convert an svg text to png using the browser
            return new Promise(function(resolve, reject) {
                try {
                    // can use the domUrl function from the browser
                    var domUrl = window.URL || window.webkitURL || window;
                    if (!domUrl) {
                        throw new Error("(browser doesnt support this)")
                    }

                    // figure out the height and width from svg text
                    var match = svgText.match(/height=\"(\d+)/m);
                    var height = match && match[1] ? parseInt(match[1], 10) : 200;
                    var match = svgText.match(/width=\"(\d+)/m);
                    var width = match && match[1] ? parseInt(match[1], 10) : 200;
                    margin = margin || 0;

                    // it needs a namespace
                    if (!svgText.match(/xmlns=\"/mi)) {
                        svgText = svgText.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
                    }

                    // create a canvas element to pass through
                    var canvas = document.createElement("canvas");
                    canvas.width = width + margin * 2;
                    canvas.height = height + margin * 2;
                    var ctx = canvas.getContext("2d");


                    // make a blob from the svg
                    var svg = new Blob([svgText], {
                        type: "image/svg+xml;charset=utf-8"
                    });

                    // create a dom object for that image
                    var url = domUrl.createObjectURL(svg);

                    // create a new image to hold it the converted type
                    var img = new Image;

                    // when the image is loaded we can get it as base64 url
                    img.onload = function() {
                        // draw it to the canvas
                        ctx.drawImage(this, margin, margin);

                        // if it needs some styling, we need a new canvas
                        if (fill) {
                            var styled = document.createElement("canvas");
                            styled.width = canvas.width;
                            styled.height = canvas.height;
                            var styledCtx = styled.getContext("2d");
                            styledCtx.save();
                            styledCtx.fillStyle = fill;
                            styledCtx.fillRect(0, 0, canvas.width, canvas.height);
                            styledCtx.strokeRect(0, 0, canvas.width, canvas.height);
                            styledCtx.restore();
                            styledCtx.drawImage(canvas, 0, 0);
                            canvas = styled;
                        }
                        // we don't need the original any more
                        domUrl.revokeObjectURL(url);
                        // now we can resolve the promise, passing the base64 url
                        resolve(canvas.toDataURL());
                    };

                    // load the image
                    img.src = url;

                }
                catch (err) {
                    reject('failed to convert svg to png ' + err);
                }
            });
        }
    }
}
content.init();
document._hunterxhunter = content;
