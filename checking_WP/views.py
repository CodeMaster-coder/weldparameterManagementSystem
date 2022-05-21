from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
import pymysql
import datetime as datetime
import json

"""不理解这个怎样实现的，需要学习loginview方法"""
class LoginView(APIView):
    def post(self,request,*args,**kwargs):
        a = request.data
        print(a)
        odinaryCheckTime = datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S")
        if a['code'] == 'parameter':
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
        id, area, gun, carType, weldSpotNumber,sheet1, sheet2, sheet3, sheet4,modifyReason,odinaryCheckBody
        FROM
        modifyparameter
        WHERE
        odinaryCheck is Null 
        AND modifyStatus = '更改后';"""
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
            keys = ['id', 'area', 'gun', 'carType', 'weldSpotNumber', 'sheet1', 'sheet2', 'sheet3', 'sheet4',
                    'modifyReason', 'odinaryCheckBody']
            list_json = [dict(zip(keys, item)) for item in list1]
            str_json = json.dumps(list_json, indent=2, ensure_ascii=False)
            print(str_json)
            return Response(str_json)
        if a['code'] == 'enter':
            """连接数据库查询"""
            checkbox = a['ordinarycheck']
            str1 = ','
            ordinarycheck = str1.join(checkbox)
            print(ordinarycheck)
            # 2.连接mysql数据库的服务器
            connc = pymysql.connect(
                # mysql 服务端ip
             
            )
            # 3创建游标对象
            cur = connc.cursor()

            # 4 编写SQL语句
            sql = """UPDATE modifyparameter SET odinaryCheck = '{reason}',odinaryCheckTime = '{odinaryCheckTime}' WHERE id = '{id1}';"""
            sql1 = sql.format(reason=ordinarycheck, odinaryCheckTime=odinaryCheckTime, id1=a['id'])
            # 5 使用游标对象去调用SQL
            cur.execute(sql1)
            # 6 提交操作
            connc.commit()
            # 7关闭游标对象
            cur.close()
            # 8 关闭连接
            connc.close()
            return Response({"status": True})