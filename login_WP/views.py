from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import pymysql

import datetime as datetime
import json
import requests
import base64

from Crypto.Cipher import AES
from . import WXBizDataCrypt
# from WXBizDataCrypt import WXBizDataCrypt

class LoginView(APIView):
    def post(self,request,*args,**kwargs):
        # print (request.data)
        param = request.data
        print(param)
        print(param.get("demo"))
        # #通过前端传过来的code解密获取用户信息
        if param.get("demo") == "register":
            JSCODE = param["code"]

            encryptedData = param["encryptedData"]
            iv = param["iv"]
            APPID = "wx385eafc5617f2dbc"
            SECRET = "bd3d2665ef7d61f0f2aa3b46bad13de5"
            url = 'https://api.weixin.qq.com/sns/jscode2session?appid={appid}&secret={secret}&js_code={code}&grant_type=authorization_code'.format(
                appid=APPID, secret=SECRET, code=JSCODE)
            res = requests.get(url)

            openid = res.json().get('openid')

            session_key = res.json().get('session_key')
            pc = WXBizDataCrypt.WXBizDataCrypt(APPID, session_key)

            data = pc.decrypt(encryptedData, iv)  # data中是解密的用户信息

            nickName =  data["nickName"]
            avatarUrl = data["avatarUrl"]
            selecttime = datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S")
            employeeId = param["employeeId"]
            employeeName = param["employeeName"]
            userArea = param["userArea"]
            authority = 'false'
            try:
                # 2.连接mysql数据库的服务器
                connc = pymysql.connect(
                    # mysql 服务端ip
               
                )
                # 3创建游标对象
                cur = connc.cursor()

                # 4 编写SQL语句

                sql = 'insert into userinfo (openid, session_key, nickName, avatarUrl, userArea, employeeId, employeeName, authority, selecttime) values (%s,%s,%s,%s,%s,%s,%s,%s,%s)'
                add_data = [openid, session_key, nickName, avatarUrl, userArea, employeeId, employeeName, authority, selecttime]
                # 5 使用游标对象去调用SQL
                cur.execute(sql, add_data)

                # 6 提交操作
                connc.commit()

                # 7关闭游标对象
                cur.close()
                # 8 关闭连接
                connc.close()
            except Exception as e:
                print(e)

            return Response({"status": True})
        elif param.get("demo") == "login":
            JSCODE = param["code"]
            APPID = "wx385eafc5617f2dbc"
            SECRET = "bd3d2665ef7d61f0f2aa3b46bad13de5"
            url = 'https://api.weixin.qq.com/sns/jscode2session?appid={appid}&secret={secret}&js_code={code}&grant_type=authorization_code'.format(
                appid=APPID, secret=SECRET, code=JSCODE)
            res = requests.get(url)
            openid = res.json().get('openid')
            print(openid)
            value = ("'" + str(openid) + "'")
            # print(value)
            # print(type(value))


            # 2.连接mysql数据库的服务器
            connc = pymysql.connect(
                # mysql 服务端ip
            
            )
            # 3创建游标对象
            cur = connc.cursor()

            # 4 编写SQL语句
            sql = """select userinfo.id,userinfo.nickName,userinfo.avatarUrl,userinfo.employeeId,userinfo.employeeName,userinfo.userArea,userinfo.authority from userinfo where openid =%s"""%(value)

            cur.execute(sql)
            # print('1111')
            # 6 提交操作
            result = cur.fetchall()
            # print(result)
            # print(type(result))

            # 7关闭游标对象
            cur.close()
            # 8 关闭连接
            connc.close()
            # 将元组转化为列表
            list1 = []
            # list2 = []
            print(list1)
            for i in result:
                # print(i)
                list1.append(list(i))
            print(list1)
            # for j in list1:
            #     j[1] = j[1]
            #     j[2] = eval(j[2])
            #     list2.append(list(j))
            #     print(list2)

            keys = ['id',  'nickName', 'avatarUrl', 'employeeId', 'employeeName', 'userArea', 'authority']
            list_json = [dict(zip(keys, item)) for item in list1]
            # print(list_json)
            str_json = json.dumps(list_json, indent=2, ensure_ascii=False)
            backuserinfo = json.loads(str_json)
            return Response(backuserinfo)
