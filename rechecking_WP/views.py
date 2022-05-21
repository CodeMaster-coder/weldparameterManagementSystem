from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
import pymysql
import datetime as datetime
import json

"""不理解这个怎样实现的，需要学习loginview方法"""
class DateEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj,datetime.datetime):
            return obj.strftime("%Y-%m-%d %H:%M:%S")
        else:
            return json.JSONEncoder.default(self,obj)

class LoginView(APIView):
    def post(self,request,*args,**kwargs):
        a = request.data
        print(a)
        print("a:", a)
        # 判断code
        if a['code'] == 'rechecking':
            print('任务分配')

            """连接数据库查询所有QRK名称"""
            # 2.连接mysql数据库的服务器
            connc = pymysql.connect(
                # mysql 服务端ip
        
            )
            # 3创建游标对象
            cur = connc.cursor()

            # 4 编写SQL语句
            sql = """SELECT 
        id,  gun, carType, weldSpotNumber,sheet1, sheet2, sheet3, sheet4,modifyReason,modifyBody,modifyTime,odinaryCheckBody,odinaryCheckTime
        FROM
        modifyparameter
        WHERE
        odinaryCheck = '质量不合格' 
        AND modifyStatus = '更改后'
        AND retreat is Null
        ORDER BY gun"""
            # 5 使用游标对象去调用SQL
            cur.execute(sql)
            # 6 提交操作
            result = cur.fetchall()
            print(result)
            # 7关闭游标对象
            cur.close()
            # 8 关闭连接
            connc.close()
            """数据处理"""
            list1 = []
            for i in result:
                j = list(i)  # 把元组类型全部变成列表类型
                list1.append(j)
            print(list1)
            # 将列表转化为字典返回
            keys = ['id',  'gun', 'carType', 'weldSpotNumber','sheet1', 'sheet2', 'sheet3', 'sheet4','modifyReason','modifyBody','modifyTime','odinaryCheckBody','odinaryCheckTime']
            list_json = [dict(zip(keys, item)) for item in list1]
            str_json = json.dumps(list_json, indent=2, ensure_ascii=False,cls=DateEncoder)
            print(str_json)
            return Response(str_json)
        if a['code'] == 'rechecking_confirm':
            """连接数据库查询"""
            # 2.连接mysql数据库的服务器
            connc = pymysql.connect(
                # mysql 服务端ip
          
            )
            # 3创建游标对象
            cur = connc.cursor()

            # 4 编写SQL语句
            sql = 'UPDATE modifyparameter SET retreatbody = %s,retreat = %s,retreattime= %s WHERE id = %s;'
            time = datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S")  # 引入时间函数，编写当前日期
            print(time)
            print(type(time))
            value = [a['retreatbody'], a['retreat'], time, a['id']]
            # 5 使用游标对象去调用SQL
            cur.execute(sql,value)
            # 6 提交操作
            connc.commit()
            # 7关闭游标对象
            cur.close()
            # 8 关闭连接
            connc.close()
            return Response({"status": True})
        if a['code'] == 'metalgracheck':
            print('任务分配')

            """连接数据库查询所有QRK名称"""
            # 2.连接mysql数据库的服务器
            connc = pymysql.connect(
                # mysql 服务端ip
          
            )
            # 3创建游标对象
            cur = connc.cursor()

            # 4 编写SQL语句
            sql = """SELECT 
        id,  gun, carType, weldSpotNumber,sheet1, sheet2, sheet3, sheet4,modifyReason,modifyBody,modifyTime,odinaryCheck,odinaryCheckBody,odinaryCheckTime
        FROM
        modifyparameter
        WHERE
        odinaryCheck != '质量不合格' 
		AND odinaryCheck is not null
        AND modifyStatus = '更改后'
        AND metalgraphyCheck is null
        ORDER BY gun"""
            # 5 使用游标对象去调用SQL
            cur.execute(sql)
            # 6 提交操作
            result = cur.fetchall()
            print(result)
            # 7关闭游标对象
            cur.close()
            # 8 关闭连接
            connc.close()
            """数据处理"""
            list1 = []
            for i in result:
                j = list(i)  # 把元组类型全部变成列表类型
                list1.append(j)
            print(list1)
            # 将列表转化为字典返回
            keys = ['id', 'gun', 'carType', 'weldSpotNumber', 'sheet1', 'sheet2', 'sheet3', 'sheet4', 'modifyReason',
                    'modifyBody', 'modifyTime', 'odinaryCheck','odinaryCheckBody', 'odinaryCheckTime']
            list_json = [dict(zip(keys, item)) for item in list1]
            str_json = json.dumps(list_json, indent=2, ensure_ascii=False, cls=DateEncoder)
            print(str_json)
            return Response(str_json)
        if a['code'] == 'metalgracheck_confirm':
            """连接数据库查询"""
            # 2.连接mysql数据库的服务器
            connc = pymysql.connect(
                # mysql 服务端ip
             
            )
            # 3创建游标对象
            cur = connc.cursor()

            # 4 编写SQL语句
            sql = 'UPDATE modifyparameter SET metalgraphyCheckBody = %s,metalgraphyCheck = %s,retreattime= %s WHERE id = %s;'
            time = datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S")  # 引入时间函数，编写当前日期
            print(time)
            print(type(time))
            value = [a['metalgraphyCheckBody'], a['metalgraphyCheck'], time, a['id']]
            # 5 使用游标对象去调用SQL
            cur.execute(sql,value)
            # 6 提交操作
            connc.commit()
            # 7关闭游标对象
            cur.close()
            # 8 关闭连接
            connc.close()
            return Response({"status": True})