(function() {
sig_data = {};

sig_data.tooltip_format = {
    signature_title:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},],], keys: '{sig} '},
    signature_partial:{format:[[{label:'{route}',type:'str',keys:['route',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'6.2'},],], keys: '{#sum_item_value} {route} '},
    mutation_title:{format:[[{label:'{id}',type:'str',keys:['id',],ext:''},],], keys: '{id} '},
    mutation_partial:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'.2'},],], keys: '{#sum_item_value} {sig} '},
};

sig_data.signatures = ['Signature 1','Signature 2','Signature 3','Signature 4','Signature 5','Signature 6',];
sig_data.sig_colors = ['#66C2A5','#FC8D62','#8DA0CB','#E78AC3','#A6D854','#FFD92F',];
sig_data.dataset_sig = [[[0.0207,0.0204,0.0077,0.0257,0.0171,0.0174,0.0076,0.0142,0.0254,0.0066,0.0023,0.0137,0.0009,0.0106,0.0016,0],[0.0241,0.0127,0.0138,0.0192,0.0127,0.0095,0.0093,0.0111,0.0103,0.0064,0.0052,0.0158,0,0.0097,0.0075,0.0027],[0.0178,0.0089,0.0126,0.0178,0.0121,0.0033,0.0134,0.0194,0.009,0.0065,0.0139,0.012,0.004,0,0.0071,0.0047],[0.001,0.0075,0.0109,0.0039,0.0097,0.0173,0.0164,0.0248,0.0107,0.0038,0.0078,0.0154,0,0.0048,0.0082,0.0216],[0.005,0.0158,0.0109,0.0175,0.0098,0.0193,0.0091,0.0052,0.0102,0.0107,0.0107,0.0052,0.0048,0.0142,0.0059,0.011],[0.0071,0.0046,0.0125,0.0055,0.0058,0.0068,0.0089,0.0048,0.0075,0.0044,0.0161,0.0104,0.0071,0.0082,0.0133,0.0189],],[[0.0013,0,0.0002,0.0001,0.001,0.0007,0.0003,0.0004,0.0006,0.0003,0.0002,0,0.0268,0.01,0.0015,0.0133],[0.0022,0.0006,0.0001,0.0017,0.0027,0.0005,0.0004,0.0028,0.0008,0.0004,0.0002,0.0013,0.156,0.0297,0.0056,0.1938],[0.0038,0.0011,0,0.0013,0.0094,0.0024,0.003,0.0045,0.0042,0.0016,0.0018,0.0025,0.2728,0.0521,0.028,0.1375],[0.0015,0.0006,0.0006,0.0004,0.0004,0.0004,0.0002,0,0.0003,0.0001,0.0004,0.0001,0.0003,0.0001,0.0001,0.0002],[0.0005,0.0001,0.0004,0.0001,0,0.0004,0.001,0.0002,0.0002,0.0003,0.0006,0.0003,0.0003,0.0004,0.0002,0.0002],[0.0004,0.0003,0.0001,0.0001,0,0.0002,0,0,0.0001,0.0001,0.0012,0.0002,0.0001,0.0001,0.0001,0.0005],],[[0.0249,0.014,0.0022,0.0147,0.0148,0.0088,0.0016,0.0172,0.0213,0.0086,0.0025,0.0154,0.0299,0.0193,0.0036,0.0394],[0.0025,0.0059,0.002,0.0051,0.004,0.0039,0.0014,0.0095,0.0027,0.0038,0,0.0013,0.0092,0.0139,0,0.0225],[0.0246,0.0113,0.0619,0.018,0.0176,0.0129,0.0368,0.0254,0.0167,0.0158,0.0365,0.013,0.0413,0.0397,0.0265,0.05],[0,0.006,0.0056,0.0071,0,0.0043,0.0023,0.0083,0.0018,0.0031,0.0027,0.0036,0.0118,0.0044,0.0044,0.0078],[0.0124,0.0075,0.0099,0.0153,0.0052,0.0089,0.0021,0.0099,0.0055,0.0044,0.0019,0.0058,0.0069,0.0058,0.0061,0.0118],[0,0,0.0002,0,0.0015,0.0014,0.004,0.0048,0,0.0012,0,0.0027,0.0024,0.0025,0.0017,0.0066],],[[0.0145,0.0149,0.0032,0.0046,0.0102,0,0.0028,0.0027,0.012,0.007,0.0038,0.0052,0.0195,0.0128,0.0045,0.02],[0.0054,0.0051,0.001,0.0036,0,0,0.0022,0.0007,0.0033,0.0037,0.0002,0.0021,0,0.0052,0.0005,0],[0.0203,0.0092,0.0761,0.0024,0.0217,0.0182,0.0409,0.011,0.0158,0.013,0.0492,0.0142,0.0328,0.0273,0.0434,0.0207],[0.0179,0.0127,0.0101,0.0292,0.0041,0.0024,0.003,0,0.0008,0.0031,0.0021,0.0016,0.0331,0.0038,0.0032,0.0087],[0.0276,0.0064,0.015,0.0186,0.0062,0.0047,0.01,0.0034,0.0123,0.0071,0.0091,0.0196,0.0158,0.0142,0.0058,0.0159],[0.012,0.0062,0,0.0079,0.0027,0.0035,0.0018,0.0106,0.002,0.0005,0.0033,0.0047,0.0038,0.0031,0.0053,0.014],],[[0.0273,0.0212,0.0018,0.0205,0.0231,0.0211,0.0017,0.0225,0.0113,0.0156,0.0007,0.0126,0.0217,0.014,0.0015,0.0277],[0.0123,0.0085,0.0018,0.0124,0.0107,0.0103,0.0016,0.0147,0.0067,0.0074,0.001,0.0099,0,0.0079,0,0.0104],[0.0208,0.0064,0.0031,0.0188,0.0126,0.0109,0,0.0173,0.0129,0.0092,0.0024,0.0116,0.0198,0.0166,0,0.0218],[0.0124,0.0074,0.013,0.0181,0.011,0.0131,0.0121,0.017,0.0066,0.0062,0.0069,0.0111,0.014,0.011,0.0059,0.0202],[0.0222,0.0072,0.0117,0.0187,0.0086,0.0136,0.0082,0.0148,0.0075,0.0051,0.0042,0.0095,0.0118,0.0074,0.0064,0.0114],[0.0056,0.0021,0.007,0.0048,0.0038,0.0051,0.0071,0.0114,0.0035,0.0026,0.0075,0.0062,0.0064,0.0046,0.0079,0.0113],],[[0,0.0044,0,0.0048,0.0127,0.0076,0,0,0,0,0.0006,0.0028,0.0163,0.0244,0,0.0222],[0.0198,0.0078,0.0023,0.0249,0.0148,0.0082,0.0025,0.0212,0.0062,0.0046,0.0027,0.0142,0.1179,0.0559,0.0062,0.1797],[0.0012,0.015,0.0153,0.0094,0.0039,0.0047,0.0101,0.013,0.0038,0.0067,0.0106,0.0085,0,0.0072,0.003,0.0084],[0.0035,0.0057,0,0.0022,0.003,0.0035,0.005,0.0049,0.0028,0.0045,0.0045,0.0043,0.0024,0.0031,0.004,0.005],[0.0093,0.0064,0.0156,0.0191,0.0106,0,0.0138,0.0126,0.0082,0.0028,0.0073,0.0036,0.0044,0.0054,0.0022,0.0051],[0.0017,0.0009,0.0116,0.0127,0.0038,0.0019,0.0139,0.0098,0.0062,0.0044,0.0047,0.005,0.0065,0.0024,0.008,0.012],],];
sig_data.dataset_sig_max = 0.2728;
sig_data.route_id = ['AA','AC','AG','AT','CA','CC','CG','CT','GA','GC','GG','GT','TA','TC','TG','TT',];
sig_data.substitution = [{name: 'C > A', color: '#1BBDEB', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'C > G', color: '#211D1E', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'C > T', color: '#E62623', route: ['ApCpA','ApCpC','ApCpG','ApCpT','CpCpA','CpCpC','CpCpG','CpCpT','GpCpA','GpCpC','GpCpG','GpCpT','TpCpA','TpCpC','TpCpG','TpCpT',],},{name: 'T > A', color: '#CFCFCF', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},{name: 'T > C', color: '#ACD577', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},{name: 'T > G', color: '#EDC7C4', route: ['ApTpA','ApTpC','ApTpG','ApTpT','CpTpA','CpTpC','CpTpG','CpTpT','GpTpA','GpTpC','GpTpG','GpTpT','TpTpA','TpTpC','TpTpG','TpTpT',],},];

// [ID, signature, value]
sig_data.mutations = [[0,0,0.236300],[0,1,0.018000],[0,2,0.342100],[0,3,0.315400],[0,4,0.075200],[0,5,0.012700],[1,0,0.125800],[1,1,0.068300],[1,2,0.000000],[1,3,0.120900],[1,4,0.426900],[1,5,0.257800],[2,0,0.058700],[2,1,0.098600],[2,2,0.246600],[2,3,0.000000],[2,4,0.519500],[2,5,0.076400],[3,0,0.188200],[3,1,0.076500],[3,2,0.035500],[3,3,0.108100],[3,4,0.412900],[3,5,0.178600],[4,0,0.000000],[4,1,0.021500],[4,2,0.030000],[4,3,0.104500],[4,4,0.713400],[4,5,0.130200],[5,0,0.070200],[5,1,0.237300],[5,2,0.151100],[5,3,0.000000],[5,4,0.261500],[5,5,0.279700],[6,0,0.324300],[6,1,0.000000],[6,2,0.055500],[6,3,0.058000],[6,4,0.428500],[6,5,0.133400],[7,0,0.058500],[7,1,0.000000],[7,2,0.297000],[7,3,0.357700],[7,4,0.248800],[7,5,0.037700],[8,0,0.072400],[8,1,0.189800],[8,2,0.083000],[8,3,0.244700],[8,4,0.174600],[8,5,0.235300],[9,0,0.029300],[9,1,0.000000],[9,2,0.702200],[9,3,0.147500],[9,4,0.026000],[9,5,0.094700],[10,0,0.000000],[10,1,0.146400],[10,2,0.451100],[10,3,0.223800],[10,4,0.124200],[10,5,0.054300],[11,0,0.256500],[11,1,0.084900],[11,2,0.171100],[11,3,0.005100],[11,4,0.482200],[11,5,0.000000],[12,0,0.000000],[12,1,0.084900],[12,2,0.226400],[12,3,0.238200],[12,4,0.220200],[12,5,0.230100],[13,0,0.094400],[13,1,0.000000],[13,2,0.093400],[13,3,0.100900],[13,4,0.589600],[13,5,0.121400],[14,0,0.128000],[14,1,0.072500],[14,2,0.000000],[14,3,0.070000],[14,4,0.566300],[14,5,0.163000],[15,0,0.000000],[15,1,0.935100],[15,2,0.043300],[15,3,0.000000],[15,4,0.000000],[15,5,0.021400],[16,0,0.353300],[16,1,0.123800],[16,2,0.000000],[16,3,0.320500],[16,4,0.000000],[16,5,0.202200],[17,0,0.086000],[17,1,0.116800],[17,2,0.337600],[17,3,0.343300],[17,4,0.000000],[17,5,0.116000],[18,0,0.022000],[18,1,0.146300],[18,2,0.000000],[18,3,0.485700],[18,4,0.345800],[18,5,0.000000],[19,0,0.041100],[19,1,0.666100],[19,2,0.212400],[19,3,0.058300],[19,4,0.000000],[19,5,0.021900],[20,0,0.088400],[20,1,0.070900],[20,2,0.009100],[20,3,0.395500],[20,4,0.385200],[20,5,0.050500],];
sig_data.mutation_count = [4001,7174,5804,5712,14470,8572,9542,6290,3656,2597,5718,12025,11346,11099,8837,71019,5435,2170,5187,7108,3550,];
sig_data.Ids = ['PD3851a','PD3890a','PD3904a','PD3905a','PD3945a','PD4005a','PD4006a','PD4085a','PD4086a','PD4088a','PD4103a','PD4107a','PD4109a','PD4115a','PD4116a','PD4120a','PD4192a','PD4194a','PD4198a','PD4199a','PD4248a',];
sig_data.esc_Ids = [];
for (var i=0; i < sig_data.Ids.length; i++) {
    sig_data.esc_Ids[i] = 'Key' + i;
}

function tooltip_text(format, obj) {
    var tooltip = [];
    for (var t in format.format) {
        tooltip.push(utils.text_format(format.format[t], obj));
    }
    return tooltip;
};

sig_data.get_data_par_signature = function (signature_id) {
    
    var tooltips = [];

    // par change
    for (var i=0; i < sig_data.substitution.length; i++) {
        
        var sum = 0;
        
        var obj = {
            'sig': sig_data.substitution[i].name,
        };
        tooltips[i] = [];
        var segment_index = -1;
        for (var j=0; j < sig_data.dataset_sig[signature_id][i].length; j++) {
            if (j%16 == 0) {
                segment_index += 1;
                tooltips[i][segment_index] = [];
            }
            obj['route'] = sig_data.substitution[i].route[j];
            obj['#sum_item_value'] = sig_data.dataset_sig[signature_id][i][j];
            
            tooltips[i][segment_index].push(tooltip_text(sig_data.tooltip_format['signature_partial'], obj));
            sum += sig_data.dataset_sig[signature_id][i][j];
        }
        
        obj['#sum_group_value'] = sum;
        
        var title = tooltip_text(sig_data.tooltip_format['signature_title'], obj);
        for (var s = 0; s < tooltips[i].length; s++) {
            for (var t = 0; t < title.length; t++) {
                tooltips[i][s].splice(t, 0, title[t]);
            }
        }
    }
    
    return {data: sig_data.dataset_sig[signature_id], tooltip: tooltips};
};

sig_data.get_bars_data = function (rate) {
    
    var data = [];
    var keys = [];
    var tooltips = {};
    var sum_par_id = [];
    for (var i1=0; i1 < sig_data.Ids.length; i1++) {
        tooltips[sig_data.esc_Ids[i1]] = [];
        sum_par_id[i1] = 0;
    }
    
    // par func
    for (var f=0; f < sig_data.signatures.length; f++) {

        data[f] = [];
        keys[f] = [];

        // par ID
        for (var i2=0; i2 < sig_data.Ids.length; i2++) {
            
            var data_filt = sig_data.mutations.filter(function(item, index){
                if ((item[0] == i2) && (item[1] == f)) return true;
            });
            
            //var sum = data_filt.length;
            var sum = 0;
            for (var s = 0; s < data_filt.length; s++) {
                sum += data_filt[s][2];
            }
            
            var mutation_count = 1;
            if (rate == false) {
                if (sig_data.mutation_count.length > 0) mutation_count = sig_data.mutation_count[i2];
            }
            
            if (sum > 0) {
                sum = sum*mutation_count;
            
                data[f].push(sum);
                keys[f].push(sig_data.esc_Ids[i2]);
                
                var obj2 = {
                    '#sum_mutaion_all': sig_data.mutations.length,
                    '#sum_item_value': sum,
                    'id': sig_data.Ids[i2],
                    'sig': sig_data.signatures[f],
                };
                tooltips[sig_data.esc_Ids[i2]].push(tooltip_text(sig_data.tooltip_format["mutation_partial"], obj2));
                sum_par_id[i2] += sum;
            }
        }
    }
    for (var i3=0; i3 < sig_data.Ids.length; i3++) {
        var obj3 = {
            '#sum_mutaion_all': sig_data.mutations.length,
            '#sum_item_value': sum_par_id[i3],
            'id': sig_data.Ids[i3],
        };
        
        var title = tooltip_text(sig_data.tooltip_format["mutation_title"], obj3);
        for (var t = 0; t < title.length; t++) {
            tooltips[sig_data.esc_Ids[i3]].splice(t, 0, title[t]);
        }
    }
    
    return {data: data, key: keys, tooltip: tooltips};
};

})();
Object.freeze(sig_data);
