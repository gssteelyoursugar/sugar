<template>
    <div class="service">
      <div class="top-bar">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img src="https://res.hjfile.cn/classec/common/header/images/logo_hover-29a6f.png" id="logo">
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-button type="success" round>
                <span class="iconfont locate-icon">&#xe63f;</span>
                <span class="address">成 都</span>
              </el-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple home-list">
              <div class="top-title">
                <ul class="title-list">
                  <router-link tag="li"
                               v-for="item in titleList"
                               :key="item.id"
                               :to="{path: '/' + item.id}"
                               class="titles"
                  >
                    {{ item.text }}
                  </router-link>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
             <div class="join-us">
               <router-link to="/job" tag="p" class="join">加入我们</router-link>
             </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="lists" >
        <div style="padding: 10px;font-size: 18px;">
          <span>全部老师</span>
        </div>
        <div class="type" >
          <ul>
            <li v-for="item in all" :key="item.id" class="types">
             <div>
               <span class="options">
                 {{ item.name }}
               </span>
               <ul>
                 <span class="choice"
                       v-for="(items,index) in item.types"
                       :key="items.id"
                       @click="handleClick($event)"
                       id="choices"
                 >
                   {{ items.text }}
                 </span>
               </ul>
             </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="teachers">
        <div class="picker">
          <ul>
            <li>
              <span>符合条件的老师</span>
            </li>
            <li>
              <span>好评数</span>
            </li>
            <li>
              <span>价格最高</span>
            </li>
            <li>
              <span>价格最低</span>
            </li>
            <li>
              <span>教龄最长</span>
            </li>
            <li>
              <span>最新入库</span>
            </li>
          </ul>
        </div>
        <div class="card-wrapper" v-for="item in teacherInfo" :key="item.id">
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <div class="avatar">
                  <img src="@/assets/logo.png" class="avatar-img">
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div class="nickname">
                  <span> {{ item.nickname }}</span>
                  <span>
                    <el-rate v-model="stars"></el-rate>
                  </span>
                </div>
                <div class="years">
                  <span>{{ item.job }}</span>
                  <span>教龄 {{ item.year }} 年</span>
                </div>
                <div class="graduated">
                  <span>{{ item.graduated }}</span>
                  <span>
                    <el-button type="warning" round>985</el-button>
                    <el-button type="warning" round>211</el-button>
                  </span>
                </div>
                <div class="major">
                  <span>
                    <el-button type="warning" plain disabled>{{ item.major }}专业</el-button>
                  </span>
                  <span>
                    <el-button type="danger" plain disabled>{{ item.level }}</el-button>
                  </span>

                  <span> <el-button type="primary" disabled>{{ item.status }}</el-button> </span>
                </div>
                <div class="comfirm">
                  <el-button type="warning" round icon="el-icon-check">已认证</el-button>
                </div>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content bg-purple">
                <div class="introduce">
                  <span>自我描述</span>
                  <p style="    margin: 5px 0; line-height: 30px;">
                    高中参加数学竞赛，获得重庆市一等奖。本科就读师范院校，拥有教师资格证书。<br/>
                    大学四年一直带有数学家教。目前读数学博士。教过数学分析，高等数学，线性代数。<br/>
                    并且拥有中文和英文的授课能力。对国外本科本科数学教育比较熟悉。<br/>
                    目前在国外做了两年本科数学教学。
                  </p>
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple details">
                <router-link tag="p" to="/information">
                  <el-button type="warning" size="mini" class="infos">查看详情</el-button>
                </router-link>
                <p>
                  <el-button type="warning" size="small" class="order">下单</el-button>
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Service",
      data ()  {
        return {
          stars : 4,
          grade : '',
          titleList : [
            {
              id : 'home',
              text : '首页'
            },
            {
              id : 'about',
              text : '关于我们'
            },
            {
              id : 'teachers',
              text : '青橙教师'
            },
            {
              id : 'job',
              text : '工作机会'
            },
            {
              id : 'contact',
              text : '联系我们'
            }
          ],
          all : [
            {
              name : '授课类型',
              types : [
                {
                  id : '1',
                  text :'不限'
                },
                {
                  id :'2',
                  text : '小学'
                },
                {
                  id : '3',
                  text :'初中'
                },
                {
                  id : '4',
                  text :'高中'
                },
                {
                  id : '5',
                  text :'乐器'
                },
                {
                  id : '6',
                  text :'舞蹈'
                },
                {
                  id : '7',
                  text :'体育'
                },
                {
                  id : '8',
                  text :'美术'
                },
                {
                  id : '9',
                  text :'语言'
                },
                {
                  id : '10',
                  text :'计算机'
                },
                {
                  id : '11',
                  text :'其他'
                }
              ]
            },
            {
              name : '授课年级',
              types : [
                {
                  id : '1',
                  text : '一年级'
                },
                {
                  id : '2',
                  text : '二年级'
                },
                {
                  id : '3',
                  text : '三年级'
                },
                {
                  id : '4',
                  text : '四年级'
                },
                {
                  id : '5',
                  text : '五年级'
                },
                {
                  id : '6',
                  text : '六年级'
                },
                {
                  id : '7',
                  text : '初一'
                },
                {
                  id : '8',
                  text : '初二'
                },
                {
                  id : '9',
                  text : '初三'
                },
                {
                  id : '10',
                  text : '高一'
                },
                {
                  id : '11',
                  text : '高二'
                },
                {
                  id : '12',
                  text : '高三'
                },
              ]
            },
            {
              name : '授课科目',
              types : [
                {
                  id : '1',
                  text : '不限'
                },
                {
                  id : '2',
                  text : '语文'
                },
                {
                  id : '3',
                  text : '数学'
                },
                {
                  id : '4',
                  text : '英语'
                },
                {
                  id : '5',
                  text : '政治'
                },
                {
                  id : '6',
                  text : '历史'
                },
                {
                  id : '7',
                  text : '生物'
                },
                {
                  id : '8',
                  text : '物理'
                },
                {
                  id : '9',
                  text : '地理'
                },
                {
                  id : '10',
                  text : '化学'
                },
                {
                  id : '11',
                  text : '作文'
                },
                {
                  id : '12',
                  text : '钢琴'
                },
                {
                  id : '13',
                  text : '小提琴'
                },
                {
                  id : '14',
                  text : '吉他'
                },
                {
                  id : '15',
                  text : '萨克斯'
                },
                {
                  id : '16',
                  text : '小号'
                },
                {
                  id : '17',
                  text : '架子鼓'
                },
                {
                  id : '18',
                  text : '琵琶'
                },
                {
                  id : '19',
                  text : '古筝'
                },
                {
                  id : '20',
                  text : '贝斯'
                },
                {
                  id : '21',
                  text : '贝斯'
                },
                {
                  id : '22',
                  text : '贝斯'
                },
                {
                  id : '23',
                  text : '贝斯'
                },
                {
                  id : '24',
                  text : '贝斯'
                },
                {
                  id : '25',
                  text : '贝斯'
                },
                {
                  id : '26',
                  text : '贝斯'
                },
                {
                  id : '27',
                  text : '贝斯'
                },
                {
                  id : '28',
                  text : '贝斯'
                },
                {
                  id : '29',
                  text : '贝斯'
                },
                {
                  id : '30',
                  text : '贝斯'
                },
                {
                  id : '31',
                  text : '贝斯'
                },
                {
                  id : '32',
                  text : '贝斯'
                },
                {
                  id : '33',
                  text : '贝斯'
                },
                {
                  id : '34',
                  text : '贝斯'
                },
                {
                  id : '35',
                  text : '贝斯'
                },
                {
                  id : '36',
                  text : '贝斯'
                },
                {
                  id : '37',
                  text : '贝斯'
                },
                {
                  id : '38',
                  text : '贝斯'
                },
                {
                  id : '39',
                  text : '贝斯'
                },
                {
                  id : '40',
                  text : '贝斯'
                },
                {
                  id : '41',
                  text : '贝斯'
                },
                {
                  id : '42',
                  text : '贝斯'
                },
                {
                  id : '43',
                  text : '贝斯'
                },
                {
                  id : '44',
                  text : '贝斯'
                },
                {
                  id : '45',
                  text : '贝斯'
                },
                {
                  id : '46',
                  text : '贝斯'
                },
                {
                  id : '47',
                  text : '贝斯'
                },
                {
                  id : '48',
                  text : '贝斯'
                },
                {
                  id : '49',
                  text : '贝斯'
                },
                {
                  id : '50',
                  text : '贝斯'
                },
                {
                  id : '51',
                  text : '贝斯'
                },
                {
                  id : '52',
                  text : '贝斯'
                },
                {
                  id : '53',
                  text : '贝斯'
                },
                {
                  id : '54',
                  text : '贝斯'
                },
                {
                  id : '55',
                  text : '贝斯'
                }
              ]
            },
            {
              name : '上门区域',
              types : [
                {
                  id : '1',
                  text : '不限'
                },
                {
                  id : '2',
                  text : '未央区'
                },
                {
                  id : '3',
                  text : '长安区'
                },
                {
                  id : '4',
                  text : '咸阳'
                },
                {
                  id : '5',
                  text : '临潼区'
                },
                {
                  id : '6',
                  text : '雁塔区'
                },
                {
                  id : '7',
                  text : '新城区'
                }
              ]
            },
            {
              name : '上课方式',
              types : [
                {
                  id : '1',
                  text : '老师上门'
                },
                {
                  id : '2',
                  text : '学生上门'
                }
              ]
            },
            {
              name : '老师性别',
              types : [
                {
                  id : '1',
                  text : '不限'
                },
                {
                  id : '2',
                  text : '男'
                },
                {
                  id : '3',
                  text : '女'
                }
              ]
            }
          ],
          types : [
            {
              id : '1',
              text : '不限'
            },
            {
              id : '2',
              text : '小学'
            },
            {
              id : '3',
              text : '中学'
            },
            {
              id : '4',
              text : '高中'
            },
            {
              id : '5',
              text : '乐器'
            },
            {
              id : '6',
              text : '舞蹈'
            },
            {
              id : '7',
              text : '体育'
            },
            {
              id : '8',
              text : '美术'
            },
            {
              id : '9',
              text : '语言'
            },
            {
              id : '10',
              text : '计算机'
            },
            {
              id : '11',
              text : '其他'
            },
          ],
          teacherInfo : [
            {
              id : '01',
              nickname : '陈老师',
              job : '数学老师',
              year : '2',
              graduated : '广西大学',
              major : '物联网工程',
              level : '本科',
              status : '大二就读',
            },
            {
              id : '02',
              nickname : '李老师',
              job : '音乐老师',
              year : '3',
              graduated : '桂林电子科技大学',
              major : '现代舞',
              level : '本科',
              status : '大四就读'
            },
            {
              id : '03',
              nickname : '梁老师',
              job : '英语老师',
              year : '3',
              graduated : '北京大学',
              major : '网络工程',
              level : '本科',
              status : '大二就读'
            },
            {
              id : '04',
              nickname : '王老师',
              job : '语文老师',
              year : '1',
              graduated : '南京大学',
              major : '土木工程',
              level : '本科',
              status : '大三就读'
            },
          ]
        }
      },
      methods : {
        handleClick (e) {
          this.grade = e.target.innerText
          console.log(this.grade)
          console.log(this.all[1].types)
        }
      },
    }
</script>

<style scoped>
  /*顶栏*/
  .el-row {
    margin: 0 !important;
  }
  div.top-bar {
    width: 100%;
    background: url("http://pic.soutu123.com/back_pic/00/01/88/75/05cef06f4f3fa1d093d8e98b5c443e67.jpg");
    padding: 0;
  }
  #logo {
    margin-top: 15px;
    margin-left: 15px;
  }
  .el-button.is-round {
    margin-top: 15px;
    border-radius: 20px;
    padding: 2px 10px;
  }
  .locate-icon {
    margin-left: -2px;
  }
  .home-list {
    margin-top: 15px;
  }
  .title-list {
    display: flex;
    padding: 0;
  }
  .titles {
    flex: 1;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
  }
  /*.user-login {*/
    /*text-align: right;*/
    /*margin-top: 15px;*/
    /*margin-right: 20px;*/
  /*}*/
  .user-login span {
    font-size: 20px;
  }
  .join {
    text-align: right;
    margin-right: 20px;
    font-size: 18px;
    font-family: 微软雅黑;
    font-weight: 500;
    color: #f00;
    cursor: pointer;
    margin-top: 15px;
  }
  /*选择列表*/
  .lists {
    margin: 0px 14px;
    border-bottom: 1px solid #e5e5e5;
  }
  .type {
    padding: 0 10px;
  }
  .type ul {
    display: inline-block;
    padding: 0;
  }
  .type ul li {
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
    padding: 10px 15px;
  }
  .choice {
    font-size: 16px;
    margin-right: 10px;
    line-height: 3rem;
    font-weight: 300;
    font-family: Microsoft YaHei;
  }
  .options {
    font-size: 16px;
    color : #e0a145;
    margin-right: 15px;
  }
  .picker {
    padding: 5px 0;
    border-bottom: 1px solid #e5e5e5;
  }
  .picker ul {
    display: flex;
    margin: 0;
    padding: 10px 5rem;
    font-size: 16px;
    font-weight: bolder;
    font-family: Microsoft YaHei;
  }
  .picker ul li {
    flex: 1;
    font-weight: 300;
    font-family: Microsoft YaHei;
  }
/*老师列表*/
  .card-wrapper {
    border-bottom: 1px solid #e5e5e5;
  }
  .nickname {
    display: flex;
  }
   .bg-purple {
     padding: 18px;
  }
  .avatar {
    border-radius: 10px;
  }
  .avatar-img {
    width: 100%;
  }
  .nickname{
    font-size: 25px
  }
  .nickname span {
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .years,.graduated {
    font-size: 25px;
    font-weight: lighter;
  }
  .major {
    margin: 10px 0;
  }
  .major span {
    margin-right: 20px;
  }
  .introduce {
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 17px;
    font-family: Microsoft YaHei;
    font-weight: normal;
  }
  .order {
    padding: 7px 25px;
    font-size: 14px;
  }
  .infos {
    padding: 9px 10px;
    font-size: 14px;
  }
  .details {
    margin-top: 8rem;
  }
  .el-button--primary.is-disabled,.el-button--danger.is-plain.is-disabled,.el-button--warning.is-plain.is-disabled {
    padding: 8px;
  }
</style>
