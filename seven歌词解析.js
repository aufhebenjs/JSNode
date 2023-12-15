let geci=`[00:00.000]作词 : Tez Cadey
[00:01.000] 作曲 : Tez Cadey
[00:02.000] 编曲 : Tez Cadey
[00:15.620]Viumbe vyote vya mungu wetu na mfalme wetu
[00:19.480]Pazeni sauti ili nasi mwimbe
[00:23.580]Pazeni sauti ili nasi mwimbe
[00:27.400]Pazeni sauti
[00:29.670]Pazeni sauti
[01:18.780]Viumbe vyote vya mungu wetu na mfalme wetu
[01:22.990]Pazeni sauti ili nasi mwimbe
[01:27.320]Pazeni sauti ili nasi mwimbe
[01:31.190]Pazeni sauti mungu wetu na mfalme wetu
[01:35.320]Viumbe vyote vya mungu wetu na mfalme wetu
[01:38.920]Pazeni sauti ili nasi mwimbe
[01:43.070]Pazeni sauti ili nasi mwimbe
[01:46.780]Pazeni sauti ili nasi mwimbe
[01:50.810]Pazeni sauti
[01:52.920]Pazeni sauti
[01:54.990]Pazeni sauti ili nasi mwimbe
[01:58.560]Pazeni\n[01:59.660]Pazeni
[02:00.710]Pazeni\n[02:01.880]Pazeni
[02:02.930]Pazeni\n[02:03.950]Pazeni
[02:38.430]Viumbe vyote vya mungu wetu na mfalme wetu
[02:42.580]Pazeni sauti ili nasi mwimbe
[02:46.710]Pazeni sauti ili nasi mwimbe
[02:50.390]Pazeni sauti ili nasi mwimbe
[02:54.130]Pazeni sauti
[02:56.300]Pazeni sauti
[02:58.360]Pazeni sauti ili nasi mwimbe
[03:02.360]Pazeni sauti
[03:04.370]Pazeni sauti
[03:06.270]Pazeni sauti
[03:08.260]Pazeni sauti
[03:18.840]\n"},"tlyric":{"version":8,"lyric":"[by:Ent_evo]\n[00:15.620]创造的一切的神和主啊\n[00:19.480]我们为此以歌代泣\n[00:23.580]我们为此以歌代泣\n[00:27.400]为此我们哭着呐喊\n[00:29.670]为此我们哭着呐喊\n[01:18.780]创造的一切的神和主啊\n[01:22.990]我们为此以歌代泣\n[01:27.320]我们为此以歌代泣\n[01:31.190]我们为此以歌代泣\n[01:35.320]创造的一切的神和主啊\n[01:38.920]我们为此以歌代泣\n[01:43.070]我们为此以歌代泣\n[01:46.780]我们为此以歌代泣\n[01:50.810]为此我们哭着呐喊\n[01:52.920]为此我们哭着呐喊\n[01:54.990]我们为此以歌代泣\n[01:58.560]我们哭着\n[01:59.660]我们哭着\n[02:00.710]我们哭着\n[02:01.880]我们哭着\n[02:02.930]我们哭着\n[02:03.950]我们哭着\n[02:38.430]创造的一切的神和主啊\n[02:42.580]我们为此以歌代泣\n[02:46.710]我们为此以歌代泣\n[02:50.390]我们为此以歌代泣\n[02:54.130]为此我们哭着呐喊\n[02:56.300]为此我们哭着呐喊\n[02:58.360]我们为此以歌代泣\n[03:02.360]为此我们哭着呐喊\n[03:04.370]为此我们哭着呐喊\n[03:06.270]为此我们哭着呐喊\n[03:08.260]为此我们哭着呐喊\n"},"code":200}`

//解析得对象
function jiexi(){
	var geci1=geci.split('\n')
	var geciduixiangshuzu=[]
    for(var i=0;i<geci1.length;i++){
    	var geci2=geci1[i]
    	var geci3=geci2.split(']')
    	
        var shijian1=geci3[0].substring(1)
//      console.log(shijian1)
    	var geci4={
    		shijian:jiexishijian(shijian1),//把shijian1传入
    		wenzi:geci3[1],
    	}
    	geciduixiangshuzu.push(geci4)
    }
    return geciduixiangshuzu
}
//解析时间辅助函数
function jiexishijian(shijian1){
	var shijian3=shijian1.split(':')
	return +shijian3[0]*60+ +shijian3[1]
}
var zuizhonggeci=jiexi()
//console.log(zuizhonggeci)


//获取dom
var dom={
	audio:document.querySelector('audio'),
	ul:document.querySelector('ul'),
	dahezi:document.querySelector('.dahezi')
}
//对象既是一堆数据的集合

//计算下标
function jisuangeci(){
	var dangqianshijian=dom.audio.currentTime//播放器当前时间
	for(var i=0;i<zuizhonggeci.length;i++){
		if(dangqianshijian<zuizhonggeci[i].shijian){
			return i-1
		}
	}
	return zuizhonggeci.length-1
}

//界面
function chuangjiangeci(){
	for(var i=0;i<zuizhonggeci.length;i++){
		var li=document.createElement('li')
		li.textContent=zuizhonggeci[i].wenzi
		dom.ul.appendChild(li)
	}
}

chuangjiangeci()

//容器高度
var dahezigaodu=dom.dahezi.clientHeight
var ligaodu=dom.ul.children[0].clientHeight
var zuidagaodu=dom.ul.clientHeight-dahezigaodu
//ul偏移量
function ulpianyiliang(){
	var gecixiabiao=jisuangeci()
	var pianyi=ligaodu*gecixiabiao+ligaodu / 2 - dahezigaodu / 2
    if(pianyi<0){
    	pianyi=0
    }
    if(pianyi>zuidagaodu){
    	pianyi=zuidagaodu
    }
    dom.ul.style.transform=`translateY(-${pianyi}px)`
    var li=dom.ul.querySelector('.active')
    if(li){
    	li.classList.remove('active')
    }
     li=dom.ul.children[gecixiabiao]
    if(li){
    	dom.ul.children[gecixiabiao].classList.add('active')
    }
    
}
dom.audio.addEventListener('timeupdate',ulpianyiliang)
//进度条

