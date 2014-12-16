var exec = require("child_process").exec;
var data = [{"date":"2014-12-11","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-11/access/508/webbm/webbm-2-access_log.tar.gz&sign=c7a93feac27fafaa3d03ac74516ac69e"},{"date":"2014-12-10","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-10/access/508/webbm/webbm-2-access_log.tar.gz&sign=23ca03a29dc58028579041bd8ff2fe49"},{"date":"2014-12-09","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-09/access/508/webbm/webbm-2-access_log.tar.gz&sign=528b73d7f0f30d69e629d0679957bb74"},{"date":"2014-12-08","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-08/access/508/webbm/webbm-2-access_log.tar.gz&sign=7e043aea20e8a1c1bc5d7a5f6b490b37"},{"date":"2014-12-07","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-07/access/508/webbm/webbm-2-access_log.tar.gz&sign=d8845e6ba22c808cf289f6e0f8710c75"},{"date":"2014-12-06","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-06/access/508/webbm/webbm-2-access_log.tar.gz&sign=9d103d6b5c96ab2b87d915279df5314f"},{"date":"2014-12-05","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-05/access/508/webbm/webbm-2-access_log.tar.gz&sign=e3e5d1938c2217f51adf6d3fca0c5d54"},{"date":"2014-12-04","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-04/access/508/webbm/webbm-2-access_log.tar.gz&sign=620d910431d475a5a6363de908a68da7"},{"date":"2014-12-03","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-03/access/508/webbm/webbm-2-access_log.tar.gz&sign=ed380c14236988c772facafcf7756b83"},{"date":"2014-12-02","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-02/access/508/webbm/webbm-2-access_log.tar.gz&sign=53d1dd457f181894ae0528b85b64d33b"},{"date":"2014-12-01","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-12-01/access/508/webbm/webbm-2-access_log.tar.gz&sign=b892f892308d637b8538993b341d6710"},{"date":"2014-11-30","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-30/access/508/webbm/webbm-2-access_log.tar.gz&sign=8235973d2af3ad0473bff7486a0b4996"},{"date":"2014-11-29","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-29/access/508/webbm/webbm-2-access_log.tar.gz&sign=c64ca7f9a68bb4d4ceaec90cc5fc0e2d"},{"date":"2014-11-28","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-28/access/508/webbm/webbm-2-access_log.tar.gz&sign=77d4540e62e5bf1b4b025468d5261f15"},{"date":"2014-11-27","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-27/access/508/webbm/webbm-2-access_log.tar.gz&sign=0c369effd103848eb08b9b023a579536"},{"date":"2014-11-26","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-26/access/508/webbm/webbm-2-access_log.tar.gz&sign=e0e89b62db66388e1180ecf83bf21eca"},{"date":"2014-11-25","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-25/access/508/webbm/webbm-2-access_log.tar.gz&sign=bd18b96fec51156fe79261d557e43307"},{"date":"2014-11-24","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-24/access/508/webbm/webbm-2-access_log.tar.gz&sign=4d53fea636208171c96117130f601755"},{"date":"2014-11-23","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-23/access/508/webbm/webbm-2-access_log.tar.gz&sign=89fa24ebf17990784b629081d00ab1da"},{"date":"2014-11-22","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-22/access/508/webbm/webbm-2-access_log.tar.gz&sign=501e42da50675310193cb5ff5e1795fc"},{"date":"2014-11-21","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-21/access/508/webbm/webbm-2-access_log.tar.gz&sign=bfed0fb4390de2f55d9464bbc82fa714"},{"date":"2014-11-20","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-20/access/508/webbm/webbm-2-access_log.tar.gz&sign=174b0334722f48a417f73b3694ba05d7"},{"date":"2014-11-19","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-19/access/508/webbm/webbm-2-access_log.tar.gz&sign=20dc653d46bf05686ca6a83dc06de444"},{"date":"2014-11-18","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-18/access/508/webbm/webbm-2-access_log.tar.gz&sign=ea441c7eb0f247c0cc6931edeb8e0bba"},{"date":"2014-11-17","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-17/access/508/webbm/webbm-2-access_log.tar.gz&sign=dc23ba46b050ef0deebcb07ba65a3067"},{"date":"2014-11-16","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-16/access/508/webbm/webbm-2-access_log.tar.gz&sign=225922bd35965d9698155d7feeff2299"},{"date":"2014-11-15","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-15/access/508/webbm/webbm-2-access_log.tar.gz&sign=29c47f4de108cff057c34fce2a7c973f"},{"date":"2014-11-14","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-14/access/508/webbm/webbm-2-access_log.tar.gz&sign=389da6a6978ebe7cb0305ad7fe035bdc"},{"date":"2014-11-13","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-13/access/508/webbm/webbm-2-access_log.tar.gz&sign=33dd449c288171d4862d7060c289e9d0"},{"date":"2014-11-12","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-12/access/508/webbm/webbm-2-access_log.tar.gz&sign=7aff17753e9ae3f88b219854ea49717f"},{"date":"2014-11-11","url":"http://download.sae.sina.com.cn/download.php?act=log&appname=webbm&path=2014-11-11/access/508/webbm/webbm-2-access_log.tar.gz&sign=5081125fb85843c64712a5f0103b3361"}];
var fs = require("fs");
var Tar = require("tar.gz");

var tmpPath = "tmp/";
var extract = "tmp/extract/"
var logFileName = "webbm-2-access_log";

var cmd = {
	dl: function(cb) {
		var count = 0 ;
		fs.mkdir(tmpPath);
		data.forEach(function(file) {
			count++;
			exec("curl '" + file.url + "' > " + tmpPath + file.date + ".tar.gz").on("close",function(){
				count--;
				if(!count && cb )cb();
			});
		});
	},

	gz: function(cb) {
		var count = 0;
		fs.readdir(tmpPath,function(err,data){
			if(err)return console.log(err);
			var tar = new Tar();

			data.forEach(function(file){
				count++;
				/\.gz$/.test(file) && tar.extract(tmpPath+file , extract + file.replace(/\.tar\.gz$/,'') , function(){
					count--;
					if(!count && cb )cb();
				});
			});
		});
	},
	ct:function(cb){
		var read = function(files){
			if( !files || !files.length )return cb && cb();
			var file = extract + files.pop() + "/" + logFileName;
			fs.readFile(file , function(err,data){
				if(err)return read(files);

				fs.appendFile(extract + logFileName , data , function(){
					read(files)
				});
			});
		}
		fs.readdir(extract,function(err,data){
			if(err)return console.log(err);
			data.sort();
			read(data);
		});
	},
	ip:function(cb){
		fs.readFile(extract+logFileName,{encoding:'utf-8'},function(err,data){
			if(err)return;

			var ips = data.match(/(\d+\.){3}\d+/g) ||[];
			fs.writeFile("ip.data",JSON.stringify(ips),function(){
				
			});
		});
	},
	clear:function(){
		exec("rm -rf " + tmpPath ).on("close",function(e){
			console.log("removed " + tmpPath , e );

		});
	}
}

if( cmd[process.argv[2]] ){
	cmd[process.argv[2]](function(){console.log("done");});
}else{
	console.log("nothing to do");
}