/*********************游戏全局公共对象声明******************************/
//工具类
var tool = new utils()
	//筷子游戏对象
var chopsticks = null
	//筷子游戏对象状态，用于记录是否进行旋转
var chopsticks_isRotate = false
	//筷子游戏对象是否开启碰撞检测状态变量
var chopsticks_isCollide = false
	//记录游戏分数
var score = 0
	//记录游戏关卡等级
window.gameLevel = 0

//定时器变量
var moveTimer;//控制筷子移动的定时器
var shakeTimer;//筷子停顿的定时器
var timerMiss;//筷子miss食物时的定时器
var timerGoback;//筷子回到原位置的定时器
var timerCreateFood;//随机生成食物的定时器
var moveTimeout1;
var moveTimeout2;

//头部分数
var head = null
var progressTextScore = null
var levelBg = null
var progressTextLevel = null

//底部生命值
var foot = null
var heart1 = null
var heart2 = null
var heart3 = null

//用于控制筷子是否开始移动的变量
var move = true
//是否筷子碰撞是否开启的变量
var touch = false

//一系列坐标记录
var end_x = 0
var end_y = 0
var start_x = 0
var start_y = 0
var start_angle = 0
var move_x = 0
var move_y = 0

var c_x = 0
var c_y = 0
var food_h = 0
var food_w = 0


var game_bg = null


var pointData = []

//挂载食物对象
window.foodObjectArr = []

//挂载游戏类型（四种火锅）
window.gameType = ''

//游戏生命值
window.heartCount = 3

//挂载延时定时器
window.destroyTimeout = []


var isMove = false

//设置游戏筷子出事旋转速度
var angleSpeed = 0.7

//设置游戏食物初始消失时间
var destroyTime = 8000

var fristTime = true

var dealRandom = true


/*****************************************************************************************************/
/**************分割线 潮汕火锅场景 ********************/
/*******************************************************************************************************/
var Game1 = function(game) {

		this.init = function() {
			initGame()
			window.gameType = 'Game1'
		}

		this.create = function() {
			var w = game.width
			var h = game.height

			game.physics.startSystem(Phaser.Physics.ARCADE);
			game_bg = game.add.sprite(0, 0, 'game_bg')
			tool.setSize(game_bg, 'width', w)


			chaoshan_pot = game.add.sprite(0, w * 0.1, 'chaoshan_pot')
			tool.setSize(chaoshan_pot, 'width', w)

			var chaoshan_bottom = game.add.sprite(0, h, 'chaoshan_bottom')
			tool.setSize(chaoshan_bottom, 'width', w)
			chaoshan_bottom.anchor.set(0, 1)

			createFood(game)

			createScore(game)

			changeHeart(game)

			createChopsticks(game)

		}

		this.update = function() {
			dealChopsticksMove(chopsticks.angleType)

			dealLevel(game)
		}
	}
	/***************************************************/
	/**************分割线 潮汕火锅场景  end********************/
	/***************************************************/

/*****************************************************************************************************/
/**************分割线 老北京火锅场景********************/
/*******************************************************************************************************/
var Game2 = function(game) {
		this.init = function() {
			initGame()
			window.gameType = 'Game2'
		}

		this.create = function() {
			var w = game.width
			var h = game.height

			game.physics.startSystem(Phaser.Physics.ARCADE);
			game_bg = game.add.sprite(0, 0, 'game_bg')
			tool.setSize(game_bg, 'width', w)


			chongqing_pot = game.add.sprite(0, -w * 0.1, 'chongqing_pot')
			tool.setSize(chongqing_pot, 'width', w)

			var chongqing_bottom = game.add.sprite(0, h, 'chongqing_bottom')
			tool.setSize(chongqing_bottom, 'width', w)
			chongqing_bottom.anchor.set(0, 1)

			createFood(game)

			createScore(game)

			changeHeart(game)

			createChopsticks(game)
		}

		this.update = function() {
			dealChopsticksMove(chopsticks.angleType)

			dealLevel(game)
		}
	}
	/***************************************************/
	/**************分割线 老北京火锅场景  end********************/
	/***************************************************/


/*****************************************************************************************************/
/**************分割线 鸳鸯火锅场景 ********************/
/*******************************************************************************************************/
var Game3 = function(game) {
		this.init = function() {
			initGame()
			window.gameType = 'Game3'
		}

		this.create = function() {

			var w = game.width
			var h = game.height

			game.physics.startSystem(Phaser.Physics.ARCADE);
			game_bg = game.add.sprite(0, 0, 'game_bg')
			tool.setSize(game_bg, 'width', w)


			yuanyang_pot = game.add.sprite(0, 0, 'yuanyang_pot')
			tool.setSize(yuanyang_pot, 'width', w)

			var yuanyang_bottom = game.add.sprite(0, h, 'yuanyang_bottom')
			tool.setSize(yuanyang_bottom, 'width', w)
			yuanyang_bottom.anchor.set(0, 1)

			createFood(game)

			createScore(game)

			changeHeart(game)

			createChopsticks(game)
		}

		this.update = function() {
			dealChopsticksMove(chopsticks.angleType)

			dealLevel(game)
		}
	}
	/***************************************************/
	/**************分割线 鸳鸯火锅场景  end********************/
	/***************************************************/

/*****************************************************************************************************/
/**************分割线 重庆火锅 ********************/
/*******************************************************************************************************/
var Game4 = function(game) {
		this.init = function() {
			initGame()
			window.gameType = 'Game4'
		}

		this.create = function() {
			var w = game.width
			var h = game.height

			game.physics.startSystem(Phaser.Physics.ARCADE);
			game_bg = game.add.sprite(0, 0, 'game_bg')
			tool.setSize(game_bg, 'width', w)


			laobeijing_pot = game.add.sprite(0, 0, 'laobeijing_pot')
			tool.setSize(laobeijing_pot, 'width', w)

			var laobeijing_bottom = game.add.sprite(0, h, 'laobeijing_bottom')
			tool.setSize(laobeijing_bottom, 'width', w)
			laobeijing_bottom.anchor.set(0, 1)

			createFood(game)

			createScore(game)

			changeHeart(game)

			createChopsticks(game)
		}

		this.update = function() {
			dealChopsticksMove(chopsticks.angleType)

			dealLevel(game)
		}
	}
	/***************************************************/
	/**************分割线 重庆火锅  end********************/
	/***************************************************/



/*****************************************************************************************************/
/**************分割线 游戏场景公用方法提取 ********************/
/*******************************************************************************************************/
//创建筷子游戏对象
function createChopsticks(game) {

	var w = game.width
	var h = game.height

	chopsticks = game.add.sprite(w * 0.5, w * 0.58, 'chopsticks');
	tool.setSize(chopsticks, 'width', w * .12)


	chopsticks.anchor.setTo(0.5, 0);

	food_h = chopsticks.height
	game.physics.enable(chopsticks, Phaser.Physics.ARCADE);

	chopsticks.angleType = 1

	chopsticks.animations.add('play', [0, 10, 11, 12, 13, 14, 15, 16, 17, 1, 2, 3]);

	/*	chopsticks.angle = 1*/

	startTime()

	game_bg.inputEnabled = true

	game_bg.events.onInputDown.add(function() {
		game_bg.inputEnabled = false
		getPoint()
		todoTouch(game)
	})
}


function createScore(game) {
	var w = game.width
	var h = game.height

	head = game.add.sprite(0, 0, 'head')
	tool.setSize(head, 'width', w)

	progressTextScore = game.add.text(w * 0.5, w * 0.04, '得分:' + score, {
		fill: '#fff',
		fontSize: w * 0.05 + 'px'
	});
	progressTextScore.font = '微软雅黑';
	progressTextScore.anchor.set(0.5, 0)

	levelBg = game.add.sprite(w, w * 0.03, 'level')
	tool.setSize(levelBg, 'width', w * 0.25)
	levelBg.anchor.set(1.1, 0)

	progressTextLevel = game.add.text(w * 0.89, w * 0.04, window.gameLevel, {
		fill: '#fff',
		fontSize: w * 0.05 + 'px'
	});
	progressTextLevel.font = '微软雅黑';

	var foot = game.add.sprite(w * .5, h, 'foot')
	tool.setSize(foot, 'width', w * .6)
	foot.anchor.set(0.5, 1)

	heart1 = game.add.sprite(w * .25, h, 'heart')
	tool.setSize(heart1, 'width', w * .16)
	heart1.anchor.set(0, 1.1)

	heart2 = game.add.sprite(w * .42, h, 'heart')
	tool.setSize(heart2, 'width', w * .16)
	heart2.anchor.set(0, 1.1)

	heart3 = game.add.sprite(w * .6, h, 'heart')
	tool.setSize(heart3, 'width', w * .16)
	heart3.anchor.set(0, 1.1)


}
//初始化游戏
function initGame() {
	//分数清零
	score = 0

	move = true

	fristTime = true


	$('.cloud_box').show()

	gamePointDataArr = [game1PointData, game2PointData, game3PointData, game4PointData]

	for (var i = 0; i < gamePointDataArr.length; i++) {
		for (var j = 0; j < gamePointDataArr[i].length; j++) {
			gamePointDataArr[i][j].alive = false
		}
	}

	angleSpeed += window.gameLevel.div(18)

	destroyTime -= window.gameLevel * 500
}

//100分升级
function dealLevel(game) {
	if (score >= 100) {
		clearInterval(timerCreateFood)
		clearInterval(moveTimer)
		clearInterval(shakeTimer)
		clearInterval(timerMiss)
		clearInterval(timerGoback)

		for (var i = 0; i < window.destroyTimeout.length; i++) {
			clearTimeout(window.destroyTimeout[i])
		}
		game.state.start('Home')

		window.gameLevel++;

		$('.cloud_box').hide()

		$('.guo_shadow').show()

	}
}

//生命值处理
function reduceHeart(game) {
	window.heartCount--;
	changeHeart(game)
}


function changeHeart(game) {
	
	var w = game.width
	var h = game.height

	if (heartCount == 2) {
		heart3.destroy()
		var x = game.add.sprite(w * .6, h, 'x')
		tool.setSize(x, 'width', w * .16)
		x.anchor.set(0, 1.1)
	} else if (heartCount == 1) {

		heart3.destroy()
		var x = game.add.sprite(w * .6, h, 'x')
		tool.setSize(x, 'width', w * .16)
		x.anchor.set(0, 1.1)

		heart2.destroy()

		var x = game.add.sprite(w * .42, h, 'x')
		tool.setSize(x, 'width', w * .16)
		x.anchor.set(0, 1.1)
	} else if (heartCount == 0) {
		heart3.destroy()

		var x = game.add.sprite(w * .25, h, 'x')
		tool.setSize(x, 'width', w * .16)
		x.anchor.set(0, 1.1)

		clearInterval(timerCreateFood)
		clearInterval(moveTimer)
		clearInterval(shakeTimer)
		clearInterval(timerMiss)
		clearInterval(timerGoback)

		for (var i = 0; i < window.destroyTimeout.length; i++) {
			clearTimeout(window.destroyTimeout[i])
		}

		setTimeout(function() {
			$('.cloud_box').hide()
			$('.game_over_shadow').show()
		}, 500)
	}
}

//处理筷子运动
function dealChopsticksMove(type) {
	if (move) {
		switch (type) {
			case 0:
				chopsticks.angle -= 0;
				break;
			case 1:
				chopsticks.angle += angleSpeed;
				break;
			case 2:
				chopsticks.angle += 0;
				shake(type)
				break;
			case 3:
				chopsticks.angle += angleSpeed;
				break;
		}
	}
}

//筷子随机移动状态改变
function shake(type) {
	move = false
	game_bg.inputEnabled = false
	var n = 0

	shakeTimer = setInterval(function() {
		if (n == 0) {
			chopsticks.body.velocity.y = -200;
			n++
		} else if (n == 1) {
			chopsticks.body.velocity.y = 200;
			n++
		} else if (n == 2) {
			chopsticks.body.velocity.y = 0;
			move = true
			n = 0
			if (type == 2) {
				chopsticks.angleType = 3
			}
			clearInterval(shakeTimer)
			game_bg.inputEnabled = true
		}
	}, 400)
}

//执行筷子随机移动
function startTime() {
	moveTimer = setInterval(function() {
		var a = Math.floor(Math.round(Math.random() * 1 + 1));
		chopsticks.angleType = a
	}, 2000)
}

//获取筷子接触点坐标
function getPoint() {
	var x = chopsticks.x
	var y = chopsticks.y
	var angle = chopsticks.angle

	var point_x = 0
	var point_y = 0


	if (angle <= 0 && angle >= -180) {
		var abs_angle = Math.abs(angle)

		point_x = x + (Math.sin(abs_angle * Math.PI / 180) * food_h) * 0.4
		point_y = y + (Math.cos(abs_angle * Math.PI / 180) * food_h) * 0.4

	} else if (angle > 0 && angle < 180) {
		point_x = x - (Math.sin(angle * Math.PI / 180) * food_h) * 0.4
		point_y = y + (Math.cos(angle * Math.PI / 180) * food_h) * 0.4
	}
	return [point_x, point_y]
}

//执行筷子移动
function todoTouch(game) {

	// //禁用移动
	move = false

	isMove = false

	angle = chopsticks.angle

	move_x = 0

	move_y = 0

	start_x = chopsticks.x
	start_y = chopsticks.y

	if (angle <= 0 && angle >= -180) {
		var abs_angle = Math.abs(angle)
		move_x = 300 * Math.sin(abs_angle * Math.PI / 180)
		move_y = 300 * Math.cos(abs_angle * Math.PI / 180)
	} else if (angle > 0 && angle < 180) {
		move_x = -300 * Math.sin(angle * Math.PI / 180)
		move_y = 300 * Math.cos(angle * Math.PI / 180)
	}

	end_x = start_x - move_x
	end_y = start_y - move_y

	chopsticks.body.velocity.x = +(move_x);
	chopsticks.body.velocity.y = +(move_y);

	moveTimeout1 = setTimeout(function() {
		chopsticks.body.velocity.x = -(move_x * 5);
		chopsticks.body.velocity.y = -(move_y * 5);
	}, 200)

	window.destroyTimeout.push(moveTimeout1)

	chopsticks.play('play', 20, true);

	timerMiss = setInterval(function() {

		var isGetScore = isTouch(game)

		if (angle <= 0 && angle >= -90) {
			if (chopsticks.x <= end_x || chopsticks.y <= end_y) {
				chopsticks.body.velocity.x = 0
				chopsticks.body.velocity.y = 0
				chopsticks.animations.stop()
				chopsticks.frame = 0
				clearTimeout(moveTimeout1)
				clearInterval(timerMiss)
				reduceHeart(game)
				showMiss(game)
				isMove = true
				goBack()
			}
		} else if (angle < -90 && angle >= -180) {
			if (chopsticks.x <= end_x || chopsticks.y >= end_y) {
				chopsticks.body.velocity.x = 0
				chopsticks.body.velocity.y = 0
				chopsticks.animations.stop()
				chopsticks.frame = 0
				clearTimeout(moveTimeout1)
				clearInterval(timerMiss)
				reduceHeart(game)
				showMiss(game)
				isMove = true
				goBack()
			}
		} else if (angle > 0 && angle <= 90) {
			if (chopsticks.x >= end_x || chopsticks.y <= end_y) {
				chopsticks.body.velocity.x = 0
				chopsticks.body.velocity.y = 0
				chopsticks.animations.stop()
				chopsticks.frame = 0
				clearTimeout(moveTimeout1)
				clearInterval(timerMiss)
				reduceHeart(game)
				showMiss(game)
				isMove = true
				goBack()
			}
		} else if (angle > 90 && angle <= 180) {
			if (chopsticks.x >= end_x || chopsticks.y >= end_y) {
				chopsticks.body.velocity.x = 0
				chopsticks.body.velocity.y = 0
				chopsticks.animations.stop()
				chopsticks.frame = 0
				clearTimeout(moveTimeout1)
				clearInterval(timerMiss)
				showMiss(game)
				reduceHeart(game)
				isMove = true
				goBack()
			}
		}
	}, 10)
}

function showMiss(game) {
	var arr = getPoint()
	var miss = game.add.sprite(arr[0], arr[1], 'miss')
	tool.setSize(miss, 'width', game.width * .25)
	miss.anchor.set(0.5, 0.5)

	setTimeout(function() {
		miss.destroy()
	}, 300)
}

//筷子回到初始位置
function goBack() {
	chopsticks.body.velocity.x = +(move_x * 3);
	chopsticks.body.velocity.y = +(move_y * 3);

	timerGoback = setInterval(function() {
		if (angle <= 0 && angle >= -90) {
			if (chopsticks.x >= start_x && chopsticks.y >= start_y) {
				chopsticks.body.velocity.x = 0
				chopsticks.body.velocity.y = 0
				clearInterval(timerGoback)

				move = true
				if (isMove) {
					game_bg.inputEnabled = true
				}
			}
		} else if (angle < -90 && angle >= -180) {
			if (chopsticks.x >= start_x && chopsticks.y <= start_y) {
				chopsticks.body.velocity.x = 0
				chopsticks.body.velocity.y = 0
				clearInterval(timerGoback)

				move = true
				if (isMove) {
					game_bg.inputEnabled = true
				}
			}
		} else if (angle > 0 && angle <= 90) {
			if (chopsticks.x <= start_x && chopsticks.y >= start_y) {
				chopsticks.body.velocity.x = 0
				chopsticks.body.velocity.y = 0
				clearInterval(timerGoback)

				move = true


				if (isMove) {
					game_bg.inputEnabled = true
				}

			}
		} else if (angle > 90 && angle <= 180) {
			if (chopsticks.x <= start_x && chopsticks.y <= start_y) {
				chopsticks.body.velocity.x = 0
				chopsticks.body.velocity.y = 0
				clearInterval(timerGoback)
				move = true

				if (isMove) {
					game_bg.inputEnabled = true
				}
			}
		}
	}, 10)

}

//判断筷子是否与食物进行接触
function isTouch(game) {
	var foodArr0 = window.foodObjectArr

	var foodArr1 = []
	for (var i = 0; i < foodArr0.length; i++) {
		if (foodArr0[i] != null) {
			foodArr1.push(foodArr0[i])
		}
	}

	var foodArr = []
	for (var i = 0; i < foodArr1.length; i++) {
		if (foodArr1[i].alive) {
			foodArr.push(foodArr1[i])
		}
	}
	var areaData = []
	for (var i = 0; i < foodArr.length; i++) {
		var areaMessage = new Object()

		var w = foodArr[i].width
		var h = foodArr[i].height

		var x0 = foodArr[i].x - w / 2
		var y0 = foodArr[i].y - h / 2

		var x1 = foodArr[i].x + w / 2
		var y1 = foodArr[i].y + h / 2

		areaMessage.food = foodArr[i]
		areaMessage.x0 = x0
		areaMessage.y0 = y0
		areaMessage.x1 = x1
		areaMessage.y1 = y1
		areaData.push(areaMessage)
	}

	for (var i = 0; i < areaData.length; i++) {
		var pointArr = getPoint()
		var x = pointArr[0]
		var y = pointArr[1]
		if (x >= areaData[i].x0 && x <= areaData[i].x1 && y >= areaData[i].y0 && y <= areaData[i].y1) {

			chopsticks.body.velocity.x = 0
			chopsticks.body.velocity.y = 0
			areaData[i].food.kill()
			score += areaData[i].food.score

			progressTextScore.text = '得分:' + score
			clearTimeout(moveTimeout1)
			clearInterval(timerMiss)

			isMove = true
			goBack2(areaData[i].food.cframe, game)

			return true
		}
	}
	return false
}

function goBack2(cframe, game) {

	chopsticks.animations.stop()
	chopsticks.frame = cframe

	var cw = chopsticks.width
	var ch = chopsticks.height

	game.add.tween(chopsticks).to({
		width: chopsticks.width * 3.5,
		height: chopsticks.height * 3.5,
		x: start_x * 1.5,
		y: start_y * 1.5
	}, 1000, Phaser.Easing.Linear.In, true, 200, 0, false).onComplete.add(function() {

		chopsticks.width = cw
		chopsticks.height = ch
		chopsticks.frame = 0
		chopsticks.x = start_x
		chopsticks.y = start_y
		chopsticks.angle = angle


		move = true

		if (isMove) {
			game_bg.inputEnabled = true
		}
	})
}

//创建食物
function createFood(game) {

	var w = game.width
	var h = game.height

	// timerCreateFood = setInterval(function() {

	if (window.gameType == 'Game1') {
		pointData = game1PointData
	} else if (window.gameType == 'Game2') {
		pointData = game2PointData
	} else if (window.gameType == 'Game3') {
		pointData = game3PointData
	} else if (window.gameType == 'Game4') {
		pointData = game4PointData
	}


	if (window.gameType == 'Game3') {
		showFood2(6,game)
		timerCreateFood = setInterval(function() {

			// 随机数获取一次创建食物的数量
			var foodCount = Math.floor(Math.round(Math.random() * 2 + 1));
			showFood2(foodCount, game)

		}, 1000)
	} else {
		showFood(6, game)
		timerCreateFood = setInterval(function() {

			// 随机数获取一次创建食物的数量
			var foodCount = Math.floor(Math.round(Math.random() * 2 + 1));

			showFood(foodCount, game)

		}, 1000)
	}
}

function showFood(foodCount, game) {

	var w = game.width
	var h = game.height

	for (var i = 0; i < foodCount; i++) {
		//获取随机食物类型
		var foodTypeIndex = getFoodRandom()

		if (foodTypeIndex == window.foodTypeIndex) {
			foodTypeIndex++
			if (foodTypeIndex == 6) {
				foodTypeIndex = Math.floor(Math.round(Math.random() * 2 + 3));
			}
		}

		window.foodTypeIndex = foodTypeIndex

		//获取随机食物位置
		var pointIndex = getFoodPoint(pointData)


		if (pointIndex != null) {

			var foodName = foodTypeArr[foodTypeIndex].name
			var foodScore = foodTypeArr[foodTypeIndex].score
			var cframe = foodTypeArr[foodTypeIndex].cframe

			var food = game.add.sprite(w * pointData[pointIndex].w, w * pointData[pointIndex].h, foodName)
			tool.setSize(food, 'width', w * foodTypeArr[foodTypeIndex].width)
			food.anchor.set(0.5, 0.5)

			food.animations.add('play', [0, 1, 2, 3, 4]);
			food.play('play', 5, true);

			var max = destroyTime + 1000
			var min = destroyTime + 1000

			var dtime = Math.floor(Math.random() * (max - min) + min)

			pointData[pointIndex].alive = true
			food.pointIndex = pointIndex
			food.time = dtime
			food.aisDes = false
			food.score = foodScore
			food.cframe = cframe
			window.foodObjectArr.push(food)

			destroyFood()
		}
	}
}


function showFood2(foodCount, game) {

	var w = game.width
	var h = game.height

	for (var i = 0; i < foodCount; i++) {
		//获取随机食物类型
		var foodTypeIndex = getFoodRandom()

		//获取随机食物位置
		var pointIndex = getFoodPoint(pointData)
		if (pointIndex != null) {
			var foodMessageArr = []
			if (pointData[pointIndex].type == 'red') {
				foodMessageArr = foodTypeArr
			} else if (pointData[pointIndex].type == 'white') {
				foodMessageArr = foodTypeArr_b
			}

			var foodName = foodMessageArr[foodTypeIndex].name
			var foodScore = foodMessageArr[foodTypeIndex].score
			var cframe = foodTypeArr[foodTypeIndex].cframe

			var food = game.add.sprite(w * pointData[pointIndex].w, w * pointData[pointIndex].h, foodName)
			tool.setSize(food, 'width', w * foodMessageArr[foodTypeIndex].width)
			food.anchor.set(0.5, 0.5)

			food.animations.add('play', [0, 1, 2, 3, 4])
			food.play('play', 5, true);

			var max = destroyTime + 1000
			var min = destroyTime + 1000
			var dtime = Math.floor(Math.random() * (max - min) + min)

			pointData[pointIndex].alive = true
			food.pointIndex = pointIndex
			food.time = dtime
			food.aisDes = false
			food.score = foodScore
			food.cframe = cframe
			window.foodObjectArr.push(food)

			destroyFood()
		}
	}
}

//获得食物类型的随机数
function getFoodRandom() {
	var foodTypeIndex = Math.floor(Math.round(Math.random() * 5));
	if (dealRandom) {
		if (foodTypeIndex == 1) {
			foodTypeIndex = 4
		} else if (foodTypeIndex == 3) {
			foodTypeIndex = 0
		} else if (foodTypeIndex == 2) {
			foodTypeIndex = 5
		}
		dealRandom = false
	}
	if (foodTypeIndex == 1 || foodTypeIndex == 3 || foodTypeIndex == 2) {
		dealRandom = true
	}
	return foodTypeIndex
}

//处理食物自动消灭
function destroyFood() {
	for (var i = 0; i < window.foodObjectArr.length; i++) {
		if (!window.foodObjectArr[i].aisDes) {
			window.foodObjectArr[i].aisDes = true;

			(function(x) {
				var timeout = setTimeout(function() {
					window.foodObjectArr[x].kill()
					pointData[window.foodObjectArr[x].pointIndex].alive = false
				}, window.foodObjectArr[x].time)
				window.destroyTimeout.push(timeout)
			})(i)

		}
	}
}

//获取食物位置,根据pointData中的alive属性进行筛选,alive属性是指当前该位置是否被占据
function getFoodPoint(pData) {
	var arr = []
	for (var i = 0; i < pData.length; i++) {
		if (pData[i].alive == false) {
			arr.push(pData[i])
		}
	}
	if (arr.length == 0) {
		return null
	} else if (arr.length == 1) {
		return arr[0].index
	} else {
		var n = Math.floor(Math.random() * arr.length)
		return arr[n].index
	}
}

var foodTypeArr = [{name: 'wanzi',score: 9,width: 0.12,cframe: 4}, 
				   {name: 'banana',score: -4,width: 0.16,cframe: 6}, 
				   {name: 'phone',score: -10,width: 0.1,cframe: 7}, 
				   {name: 'dangao',score: -6,width: 0.12,cframe: 8}, 
				   {name: 'huacai',score: 6,width: 0.12,cframe: 9}, 
				   {name: 'roupian',score: 15,width: 0.13,cframe: 5}]

var foodTypeArr_b = [{name: 'wanzi_b',score: 9,width: 0.12,cframe: 4}, 
					 {name: 'banana_b',score: -4,width: 0.16,cframe: 6}, 
					 {name: 'phone_b',score: -10,width: 0.1,cframe: 7}, 
					 {name: 'dangao_b',score: -6,width: 0.12,cframe: 8}, 
					 {name: 'huacai_b',score: 6,width: 0.12,cframe: 9}, 
					 {name: 'roupian_b',score: 15,width: 0.13,cframe: 5}]


var game1PointData = [{index: 0,w: 0.5,h: 0.38,alive: false}, 
					  {index: 1,w: 0.27,h: 0.45,alive: false}, 
					  {index: 2,w: 0.27,h: 0.65,alive: false}, 
					  {index: 3,w: 0.5,h: 0.77,alive: false}, 
					  {index: 4,w: 0.7,h: 0.45,alive: false},
					  {index: 5,w: 0.74,h: 0.65,alive: false}, 
					  {index: 6,w: 0.5,h: 0.6,alive: false}]

var game2PointData = [{index: 0,w: 0.25,h: 0.4,alive: false}, 
					  {index: 1,w: 0.5,h: 0.4,alive: false}, 
					  {index: 2,w: 0.75,h: 0.4,alive: false}, 
					  {index: 3,w: 0.2,h: 0.6,alive: false}, 
					  {index: 4,w: 0.5,h: 0.6,alive: false}, 
					  {index: 5,w: 0.78,h: 0.6,alive: false}, 
					  {index: 6,w: 0.25,h: 0.77,alive: false}, 
					  {index: 7,w: 0.5,h: 0.82,alive: false}, 
					  {index: 8,w: 0.75,h: 0.77,alive: false}]

var game3PointData = [{index: 0,w: 0.62,h: 0.47,alive: false,type: 'red'}, 
					  {index: 1,w: 0.76,h: 0.6,alive: false,type: 'red'}, 
					  {index: 2,w: 0.56,h: 0.68,alive: false,type: 'red'}, 
					  {index: 3,w: 0.68,h: 0.82,alive: false,type: 'red'}, 
					  {index: 4,w: 0.35,h: 0.47,alive: false,type: 'white'}, 
					  {index: 5,w: 0.22,h: 0.6,alive: false,type: 'white'}, 
					  {index: 6,w: 0.24,h: 0.74,alive: false,type: 'white'}, 
					  {index: 7,w: 0.38,h: 0.85,alive: false,type: 'white'}]

var game4PointData = [{index: 0,w: 0.25,h: 0.5,alive: false}, 
					  {index: 1,w: 0.23,h: 0.65,alive: false}, 
					  {index: 2,w: 0.35,h: 0.78,alive: false}, 
					  {index: 3,w: 0.6,h: 0.8,alive: false}, 
					  {index: 4,w: 0.75,h: 0.65,alive: false}, 
					  {index: 5,w: 0.73,h: 0.45,alive: false}]


/***************************************************/
/**************分割线 游戏场景公用方法提取  end********************/
/***************************************************/

//加法函数
function accAdd(arg1, arg2) {
	var r1, r2, m;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	return (arg1 * m + arg2 * m) / m;
}
//给Number类型增加一个add方法，，使用时直接用 .add 即可完成计算。 
Number.prototype.add = function(arg) {
	return accAdd(arg, this);
};


//减法函数
function Subtr(arg1, arg2) {
	var r1, r2, m, n;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	//last modify by deeka
	//动态控制精度长度
	n = (r1 >= r2) ? r1 : r2;
	return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

//给Number类型增加一个add方法，，使用时直接用 .sub 即可完成计算。 
Number.prototype.sub = function(arg) {
	return Subtr(this, arg);
};


//乘法函数
function accMul(arg1, arg2) {
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length;
	} catch (e) {}
	try {
		m += s2.split(".")[1].length;
	} catch (e) {}
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
//给Number类型增加一个mul方法，使用时直接用 .mul 即可完成计算。 
Number.prototype.mul = function(arg) {
	return accMul(arg, this);
};


//除法函数
function accDiv(arg1, arg2) {
	var t1 = 0,
		t2 = 0,
		r1, r2;
	try {
		t1 = arg1.toString().split(".")[1].length;
	} catch (e) {}
	try {
		t2 = arg2.toString().split(".")[1].length;
	} catch (e) {}
	with(Math) {
		r1 = Number(arg1.toString().replace(".", ""));
		r2 = Number(arg2.toString().replace(".", ""));
		return (r1 / r2) * pow(10, t2 - t1);
	}
}
//给Number类型增加一个div方法，，使用时直接用 .div 即可完成计算。 
Number.prototype.div = function(arg) {
	return accDiv(this, arg);
};