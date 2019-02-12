module.exports = {
  "nested": {
    "Image": {
      "fields": {
        "imageBytes": {
          "type": "bytes",
          "id": 1
        },
        "imageName": {
          "type": "string",
          "id": 2
        },
        "suffix": {
          "type": "string",
          "id": 3
        },
        "SpareParameter": {
          "keyType": "string",
          "type": "string",
          "id": 4
        },
        "imageList": {
          "rule": "repeated",
          "type": "Image",
          "id": 5
        }
      }
    },
    "PageInfo": {
      "fields": {
        "countNum": {
          "type": "int64",
          "id": 1
        },
        "pages": {
          "type": "int32",
          "id": 2
        },
        "pageIndex": {
          "type": "int32",
          "id": 3
        },
        "pageSize": {
          "type": "int32",
          "id": 4
        },
        "offset": {
          "type": "int32",
          "id": 5
        },
        "SpareParameter": {
          "keyType": "string",
          "type": "string",
          "id": 10
        }
      }
    },
    "UserInfo": {
      "fields": {
        "userId": {
          "type": "int64",
          "id": 1
        },
        "userName": {
          "type": "string",
          "id": 2
        },
        "userNamePhonetic": {
          "type": "string",
          "id": 3
        },
        "userNamePhoneticHead": {
          "type": "string",
          "id": 4
        },
        "loginId": {
          "type": "string",
          "id": 5
        },
        "loginPass": {
          "type": "string",
          "id": 6
        },
        "loginPass2": {
          "type": "string",
          "id": 7
        },
        "groupId": {
          "type": "int32",
          "id": 8
        },
        "spaceId": {
          "type": "int64",
          "id": 9
        },
        "status": {
          "type": "int32",
          "id": 10
        },
        "accessDate": {
          "type": "int64",
          "id": 11
        },
        "phoneNo": {
          "type": "string",
          "id": 12
        },
        "registerDate": {
          "type": "int64",
          "id": 13
        },
        "email": {
          "type": "string",
          "id": 14
        },
        "sex": {
          "type": "string",
          "id": 15
        },
        "accessIp": {
          "type": "string",
          "id": 16
        },
        "registerIp": {
          "type": "string",
          "id": 17
        },
        "userHeadPicId": {
          "type": "int64",
          "id": 18
        },
        "registerTime": {
          "type": "int64",
          "id": 19
        },
        "authLevel": {
          "type": "int32",
          "id": 20
        },
        "faceLevel": {
          "type": "int32",
          "id": 21
        },
        "userSignature": {
          "type": "string",
          "id": 22
        },
        "registerType": {
          "type": "int32",
          "id": 23
        },
        "Privacy": {
          "type": "int32",
          "id": 24
        },
        "clentId": {
          "type": "string",
          "id": 25
        },
        "clentType": {
          "type": "int32",
          "id": 26
        },
        "focus": {
          "type": "int32",
          "id": 27
        },
        "fans": {
          "type": "int32",
          "id": 28
        },
        "sell": {
          "type": "int32",
          "id": 29
        },
        "buy": {
          "type": "int32",
          "id": 30
        },
        "receive": {
          "type": "int32",
          "id": 31
        },
        "send": {
          "type": "int32",
          "id": 32
        },
        "isFocus": {
          "type": "bool",
          "id": 33
        },
        "isBlack": {
          "type": "bool",
          "id": 34
        },
        "channel": {
          "type": "string",
          "id": 35
        },
        "userHead": {
          "type": "PictureInfo",
          "id": 36
        },
        "userList": {
          "rule": "repeated",
          "type": "UserInfo",
          "id": 37
        },
        "orderUnpay": {
          "type": "int32",
          "id": 38
        },
        "orderUnShip": {
          "type": "int32",
          "id": 39
        },
        "orderUnReceive": {
          "type": "int32",
          "id": 40
        },
        "orderUnComment": {
          "type": "int32",
          "id": 41
        },
        "orderRefunds": {
          "type": "int32",
          "id": 43
        },
        "messageCount": {
          "type": "int32",
          "id": 44
        },
        "isLive": {
          "type": "bool",
          "id": 45
        },
        "allCollectionCount": {
          "type": "int32",
          "id": 46
        },
        "liveVideoCount": {
          "type": "int32",
          "id": 47
        },
        "articleCount": {
          "type": "int32",
          "id": 48
        },
        "appversion": {
          "type": "string",
          "id": 49
        },
        "openId": {
          "type": "string",
          "id": 50
        }
      }
    },
    "PictureInfo": {
      "fields": {
        "picId": {
          "type": "int64",
          "id": 1
        },
        "picurl": {
          "type": "string",
          "id": 2
        },
        "thumPicurl": {
          "type": "string",
          "id": 3
        },
        "iconPicurl": {
          "type": "string",
          "id": 4
        },
        "waterPicurl": {
          "type": "string",
          "id": 5
        },
        "pictureList": {
          "rule": "repeated",
          "type": "PictureInfo",
          "id": 6
        }
      }
    },
    "ActiviteInfo": {
      "fields": {
        "activityId": {
          "type": "int32",
          "id": 1
        },
        "addTime": {
          "type": "int64",
          "id": 2
        },
        "startTime": {
          "type": "int64",
          "id": 3
        },
        "endTime": {
          "type": "int64",
          "id": 4
        },
        "modifyId": {
          "type": "int32",
          "id": 5
        },
        "activityInfo": {
          "type": "string",
          "id": 6
        },
        "activiteInfoList": {
          "rule": "repeated",
          "type": "ActiviteInfo",
          "id": 7
        }
      }
    },
    "SkuOptionInfo": {
      "fields": {
        "optionalId": {
          "type": "int64",
          "id": 1
        },
        "optionalName": {
          "type": "string",
          "id": 2
        },
        "skuId": {
          "type": "int64",
          "id": 3
        },
        "skuOptionInfoList": {
          "rule": "repeated",
          "type": "SkuOptionInfo",
          "id": 4
        }
      }
    },
    "ProductSkuOption": {
      "fields": {
        "psoId": {
          "type": "int64",
          "id": 1
        },
        "psId": {
          "type": "int64",
          "id": 2
        },
        "optionalId": {
          "type": "int64",
          "id": 3
        },
        "skuOptionInfo": {
          "type": "SkuOptionInfo",
          "id": 4
        },
        "productSkuOptionList": {
          "rule": "repeated",
          "type": "ProductSkuOption",
          "id": 5
        }
      }
    },
    "AddressInfo": {
      "fields": {
        "addressId": {
          "type": "int32",
          "id": 1
        },
        "addressProvinces": {
          "type": "int32",
          "id": 2
        },
        "addressProvincesInfo": {
          "type": "string",
          "id": 3
        },
        "addressCity": {
          "type": "int32",
          "id": 4
        },
        "addressCityInfo": {
          "type": "string",
          "id": 5
        },
        "addressDistrict": {
          "type": "int32",
          "id": 6
        },
        "addressDistrictInfo": {
          "type": "string",
          "id": 7
        },
        "addressStreet": {
          "type": "string",
          "id": 8
        },
        "receiveName": {
          "type": "string",
          "id": 9
        },
        "receivePhone": {
          "type": "string",
          "id": 10
        },
        "addressPostcode": {
          "type": "string",
          "id": 11
        },
        "userId": {
          "type": "int64",
          "id": 12
        },
        "defaulted": {
          "type": "int32",
          "id": 13
        },
        "addressList": {
          "rule": "repeated",
          "type": "AddressInfo",
          "id": 14
        },
        "spaceId": {
          "type": "int64",
          "id": 15
        },
        "consignorName": {
          "type": "string",
          "id": 16
        },
        "consignorPhone": {
          "type": "string",
          "id": 17
        }
      }
    },
    "Agent": {
      "fields": {
        "agentId": {
          "type": "int32",
          "id": 1
        },
        "aGAgentName": {
          "type": "string",
          "id": 2
        },
        "aGPhone": {
          "type": "string",
          "id": 3
        },
        "areaId": {
          "type": "int32",
          "id": 4
        },
        "areaName": {
          "type": "string",
          "id": 5
        },
        "aGNumber": {
          "type": "string",
          "id": 6
        },
        "loginPass": {
          "type": "string",
          "id": 7
        },
        "aGParentId": {
          "type": "int32",
          "id": 8
        },
        "aGStatus": {
          "type": "int32",
          "id": 9
        },
        "registerTime": {
          "type": "int64",
          "id": 10
        },
        "agentList": {
          "rule": "repeated",
          "type": "Agent",
          "id": 11
        },
        "qrcodePicId": {
          "type": "int64",
          "id": 12
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 13
        }
      }
    },
    "AppVersion": {
      "fields": {
        "versionId": {
          "type": "int32",
          "id": 1
        },
        "version": {
          "type": "string",
          "id": 2
        },
        "appenv": {
          "type": "int32",
          "id": 3
        },
        "addTime": {
          "type": "int64",
          "id": 4
        },
        "downloadUrl": {
          "type": "string",
          "id": 5
        },
        "updateContent": {
          "type": "string",
          "id": 6
        },
        "isUpdate": {
          "type": "string",
          "id": 7
        },
        "appVersion": {
          "rule": "repeated",
          "type": "AppVersion",
          "id": 8
        }
      }
    },
    "AreaInfo": {
      "fields": {
        "areaId": {
          "type": "int32",
          "id": 1
        },
        "areaName": {
          "type": "string",
          "id": 2
        },
        "areaParentId": {
          "type": "int32",
          "id": 3
        },
        "areaSort": {
          "type": "int32",
          "id": 4
        },
        "areaDeep": {
          "type": "int32",
          "id": 5
        },
        "areaRegion": {
          "type": "string",
          "id": 6
        },
        "areaList": {
          "rule": "repeated",
          "type": "AreaInfo",
          "id": 7
        },
        "isSelect": {
          "type": "bool",
          "id": 8
        }
      }
    },
    "BannerInfo": {
      "fields": {
        "bannerId": {
          "type": "int64",
          "id": 1
        },
        "bannerContent": {
          "type": "string",
          "id": 2
        },
        "redirectUrl": {
          "type": "string",
          "id": 3
        },
        "redirectType": {
          "type": "int32",
          "id": 4
        },
        "picId": {
          "type": "int64",
          "id": 5
        },
        "bannerType": {
          "type": "int32",
          "id": 6
        },
        "commiterId": {
          "type": "int64",
          "id": 7
        },
        "commiterTime": {
          "type": "int64",
          "id": 8
        },
        "modifierId": {
          "type": "int64",
          "id": 9
        },
        "modifierTime": {
          "type": "int64",
          "id": 10
        },
        "status": {
          "type": "int32",
          "id": 11
        },
        "areaId": {
          "type": "int32",
          "id": 12
        },
        "orderNum": {
          "type": "int32",
          "id": 13
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 14
        },
        "bannerList": {
          "rule": "repeated",
          "type": "BannerInfo",
          "id": 15
        },
        "shareUrl": {
          "type": "string",
          "id": 16
        },
        "shareDesc": {
          "type": "string",
          "id": 17
        }
      }
    },
    "CameraInfo": {
      "fields": {
        "cameraId": {
          "type": "int64",
          "id": 1
        },
        "cameraName": {
          "type": "string",
          "id": 2
        },
        "macAddress": {
          "type": "string",
          "id": 3
        },
        "cameraPass": {
          "type": "string",
          "id": 4
        },
        "cameraOnline": {
          "type": "int32",
          "id": 5
        },
        "cameraPermission": {
          "type": "int32",
          "id": 6
        },
        "cameraLiveStatus": {
          "type": "int32",
          "id": 7
        },
        "liveFps": {
          "type": "int32",
          "id": 8
        },
        "liveKbps": {
          "type": "int32",
          "id": 9
        },
        "liveResolution": {
          "type": "string",
          "id": 10
        },
        "timingLive": {
          "type": "string",
          "id": 11
        },
        "timingLiveStart": {
          "type": "string",
          "id": 12
        },
        "timingLiveEnd": {
          "type": "string",
          "id": 13
        },
        "spaceId": {
          "type": "int64",
          "id": 14
        },
        "cameraType": {
          "type": "int32",
          "id": 15
        },
        "cameraNo": {
          "type": "string",
          "id": 16
        },
        "userHead": {
          "type": "PictureInfo",
          "id": 17
        },
        "spaceName": {
          "type": "string",
          "id": 18
        },
        "addTime": {
          "type": "int64",
          "id": 19
        },
        "userId": {
          "type": "int64",
          "id": 20
        },
        "cameraList": {
          "rule": "repeated",
          "type": "CameraInfo",
          "id": 21
        },
        "isCollection": {
          "type": "bool",
          "id": 22
        }
      }
    },
    "CameraReply": {
      "fields": {
        "cameraInfo": {
          "type": "CameraInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "CartInfo": {
      "fields": {
        "cartId": {
          "type": "int64",
          "id": 1
        },
        "userId": {
          "type": "int64",
          "id": 2
        },
        "productId": {
          "type": "int64",
          "id": 3
        },
        "productNum": {
          "type": "int64",
          "id": 4
        },
        "productName": {
          "type": "string",
          "id": 5
        },
        "inventoryId": {
          "type": "int64",
          "id": 6
        },
        "createTime": {
          "type": "int64",
          "id": 7
        },
        "spaceId": {
          "type": "int64",
          "id": 8
        },
        "productInventory": {
          "type": "ProductInventory",
          "id": 9
        },
        "validity": {
          "type": "int32",
          "id": 10
        },
        "cartInfoList": {
          "rule": "repeated",
          "type": "CartInfo",
          "id": 11
        },
        "productPic": {
          "type": "PictureInfo",
          "id": 12
        },
        "isSelect": {
          "type": "bool",
          "id": 13
        }
      }
    },
    "CartReply": {
      "fields": {
        "spaceInfo": {
          "type": "SpaceInfo",
          "id": 1
        },
        "cartInfoList": {
          "rule": "repeated",
          "type": "CartInfo",
          "id": 2
        },
        "cartReplyList": {
          "rule": "repeated",
          "type": "CartReply",
          "id": 3
        },
        "isSelect": {
          "type": "bool",
          "id": 4
        },
        "feight": {
          "type": "double",
          "id": 5
        }
      }
    },
    "CashInfo": {
      "fields": {
        "recordId": {
          "type": "int32",
          "id": 1
        },
        "cashRmb": {
          "type": "double",
          "id": 2
        },
        "cashType": {
          "type": "int32",
          "id": 3
        },
        "stauts": {
          "type": "int32",
          "id": 4
        },
        "realName": {
          "type": "string",
          "id": 5
        },
        "bankCard": {
          "type": "string",
          "id": 6
        },
        "useraccount": {
          "type": "string",
          "id": 7
        },
        "verifyUserId": {
          "type": "int32",
          "id": 8
        },
        "userId": {
          "type": "int64",
          "id": 9
        },
        "rejectReason": {
          "type": "string",
          "id": 10
        },
        "commitTime": {
          "type": "int64",
          "id": 11
        },
        "verifyTime": {
          "type": "int64",
          "id": 12
        },
        "cashFee": {
          "type": "double",
          "id": 13
        },
        "cashInfoList": {
          "rule": "repeated",
          "type": "CashInfo",
          "id": 14
        },
        "cardId": {
          "type": "int64",
          "id": 15
        },
        "userBankCard": {
          "type": "UserBankCard",
          "id": 16
        }
      }
    },
    "UserPayLogReply": {
      "fields": {
        "userPayLog": {
          "type": "UserPayLog",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        },
        "incomePrice": {
          "type": "double",
          "id": 3
        },
        "defrayPrice": {
          "type": "double",
          "id": 4
        }
      }
    },
    "UserPayLog": {
      "fields": {
        "userId": {
          "type": "int64",
          "id": 1
        },
        "amount": {
          "type": "double",
          "id": 2
        },
        "logTime": {
          "type": "int64",
          "id": 3
        },
        "logType": {
          "type": "int64",
          "id": 4
        },
        "objectId": {
          "type": "int64",
          "id": 5
        },
        "description": {
          "type": "string",
          "id": 6
        },
        "userPayLog": {
          "rule": "repeated",
          "type": "UserPayLog",
          "id": 7
        },
        "exchangeValue": {
          "type": "int64",
          "id": 8
        }
      }
    },
    "CashReply": {
      "fields": {
        "cashInfo": {
          "type": "CashInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "CommentReply": {
      "fields": {
        "productComment": {
          "type": "ProductComment",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "FacturerMerchant": {
      "fields": {
        "facturerMerchantId": {
          "type": "int64",
          "id": 1
        },
        "userId": {
          "type": "int64",
          "id": 2
        },
        "merchantUserId": {
          "type": "int64",
          "id": 3
        },
        "suSpaceId": {
          "type": "int64",
          "id": 4
        },
        "suSpaceNum": {
          "type": "string",
          "id": 5
        },
        "suSpaceName": {
          "type": "string",
          "id": 6
        },
        "meSpaceId": {
          "type": "int64",
          "id": 7
        },
        "meSpaceNum": {
          "type": "string",
          "id": 8
        },
        "meSpaceName": {
          "type": "string",
          "id": 9
        },
        "status": {
          "type": "int32",
          "id": 10
        },
        "createTime": {
          "type": "int64",
          "id": 11
        },
        "facturerMerchantList": {
          "rule": "repeated",
          "type": "FacturerMerchant",
          "id": 12
        }
      }
    },
    "ExpressCompany": {
      "fields": {
        "ecId": {
          "type": "int32",
          "id": 1
        },
        "ecName": {
          "type": "string",
          "id": 2
        },
        "ecStatus": {
          "type": "int32",
          "id": 3
        },
        "ecCode": {
          "type": "string",
          "id": 4
        },
        "ecLetter": {
          "type": "string",
          "id": 5
        },
        "ecOrder": {
          "type": "int32",
          "id": 6
        },
        "ecUrl": {
          "type": "string",
          "id": 7
        },
        "ecZtState": {
          "type": "int32",
          "id": 8
        },
        "expressCompanyList": {
          "rule": "repeated",
          "type": "ExpressCompany",
          "id": 9
        }
      }
    },
    "HelpQuestions": {
      "fields": {
        "questionsId": {
          "type": "int32",
          "id": 1
        },
        "auestions": {
          "type": "string",
          "id": 2
        },
        "answer": {
          "type": "string",
          "id": 3
        },
        "addTime": {
          "type": "int64",
          "id": 4
        },
        "orderNum": {
          "type": "int64",
          "id": 5
        },
        "status": {
          "type": "int32",
          "id": 6
        },
        "helpQuestionsList": {
          "rule": "repeated",
          "type": "HelpQuestions",
          "id": 7
        }
      }
    },
    "HMDayClassify": {
      "fields": {
        "classifyId": {
          "type": "int32",
          "id": 1
        },
        "classifyName": {
          "type": "string",
          "id": 2
        },
        "classifyTitle": {
          "type": "string",
          "id": 3
        },
        "editTime": {
          "type": "int64",
          "id": 4
        },
        "picId": {
          "type": "int64",
          "id": 5
        },
        "sortNum": {
          "type": "int32",
          "id": 6
        },
        "status": {
          "type": "int32",
          "id": 7
        },
        "HMDayClassifyList": {
          "rule": "repeated",
          "type": "HMDayClassify",
          "id": 8
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 9
        },
        "onLineCount": {
          "type": "int64",
          "id": 10
        },
        "iconPicId": {
          "type": "int64",
          "id": 11
        },
        "iconPictureInfo": {
          "type": "PictureInfo",
          "id": 12
        },
        "spaceInfo": {
          "type": "SpaceInfo",
          "id": 13
        },
        "themeColor": {
          "type": "string",
          "id": 14
        },
        "top": {
          "type": "int32",
          "id": 15
        }
      }
    },
    "PatchInfo": {
      "fields": {
        "versionId": {
          "type": "int32",
          "id": 1
        },
        "patchVersion": {
          "type": "string",
          "id": 2
        },
        "patchUrl": {
          "type": "string",
          "id": 3
        },
        "addTime": {
          "type": "int64",
          "id": 4
        },
        "patchType": {
          "type": "int32",
          "id": 5
        },
        "phoneModel": {
          "type": "string",
          "id": 6
        },
        "patchInfo": {
          "rule": "repeated",
          "type": "PatchInfo",
          "id": 7
        },
        "channel": {
          "type": "string",
          "id": 8
        }
      }
    },
    "ArticleInfoReply": {
      "fields": {
        "articleInfo": {
          "type": "ArticleInfo",
          "id": 1
        },
        "pageInfo": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "ArticleCommentReply": {
      "fields": {
        "articleComment": {
          "type": "ArticleComment",
          "id": 1
        },
        "pageInfo": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "ArticleComment": {
      "fields": {
        "commentId": {
          "type": "int64",
          "id": 1
        },
        "articleId": {
          "type": "int64",
          "id": 2
        },
        "commentContent": {
          "type": "string",
          "id": 3
        },
        "userId": {
          "type": "int64",
          "id": 4
        },
        "userName": {
          "type": "string",
          "id": 5
        },
        "toUserId": {
          "type": "int64",
          "id": 6
        },
        "toCommentId": {
          "type": "int64",
          "id": 7
        },
        "addTime": {
          "type": "int64",
          "id": 8
        },
        "source": {
          "type": "int32",
          "id": 9
        },
        "status": {
          "type": "int32",
          "id": 10
        },
        "adminId": {
          "type": "int32",
          "id": 11
        },
        "adminName": {
          "type": "int32",
          "id": 12
        },
        "adminTime": {
          "type": "int64",
          "id": 13
        },
        "articleCommentList": {
          "rule": "repeated",
          "type": "ArticleComment",
          "id": 14
        },
        "reply": {
          "type": "int64",
          "id": 15
        },
        "replyUserName": {
          "type": "string",
          "id": 16
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 17
        }
      }
    },
    "AudioInfo": {
      "fields": {
        "audioId": {
          "type": "int64",
          "id": 1
        },
        "audioTitle": {
          "type": "string",
          "id": 2
        },
        "audioUrl": {
          "type": "string",
          "id": 3
        },
        "audioStatus": {
          "type": "int32",
          "id": 4
        },
        "classifyId": {
          "type": "int32",
          "id": 5
        },
        "audioDuration": {
          "type": "string",
          "id": 6
        },
        "audioPicture": {
          "type": "PictureInfo",
          "id": 7
        },
        "audioInfoList": {
          "rule": "repeated",
          "type": "AudioInfo",
          "id": 8
        },
        "localPath": {
          "type": "string",
          "id": 9
        },
        "author": {
          "type": "string",
          "id": 10
        }
      }
    },
    "ArticleInfo": {
      "fields": {
        "articleId": {
          "type": "int64",
          "id": 1
        },
        "userId": {
          "type": "int64",
          "id": 2
        },
        "spaceId": {
          "type": "int64",
          "id": 3
        },
        "articleTitle": {
          "type": "string",
          "id": 4
        },
        "articleContent": {
          "type": "string",
          "id": 5
        },
        "videoId": {
          "type": "int64",
          "id": 6
        },
        "addTime": {
          "type": "int64",
          "id": 7
        },
        "score": {
          "type": "int32",
          "id": 8
        },
        "status": {
          "type": "int32",
          "id": 9
        },
        "adminId": {
          "type": "int32",
          "id": 10
        },
        "adminName": {
          "type": "string",
          "id": 11
        },
        "adminTime": {
          "type": "int64",
          "id": 12
        },
        "articleInfoList": {
          "rule": "repeated",
          "type": "ArticleInfo",
          "id": 13
        },
        "praise": {
          "type": "int64",
          "id": 14
        },
        "comment": {
          "type": "int64",
          "id": 15
        },
        "collection": {
          "type": "int64",
          "id": 16
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 17
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 18
        },
        "isPraise": {
          "type": "bool",
          "id": 19
        },
        "isCollection": {
          "type": "bool",
          "id": 20
        },
        "productInfo": {
          "type": "ProductInfo",
          "id": 21
        },
        "spaceInfo": {
          "type": "SpaceInfo",
          "id": 22
        },
        "videoInfo": {
          "type": "VideoInfo",
          "id": 23
        },
        "ArticleType": {
          "type": "int32",
          "id": 24
        }
      }
    },
    "AudioClassify": {
      "fields": {
        "classifyId": {
          "type": "int32",
          "id": 1
        },
        "classifyName": {
          "type": "string",
          "id": 2
        },
        "classifyIcon": {
          "type": "int64",
          "id": 3
        },
        "classifyStatus": {
          "type": "int32",
          "id": 4
        },
        "classifyPath": {
          "type": "string",
          "id": 5
        },
        "classifyImage": {
          "type": "PictureInfo",
          "id": 6
        },
        "audioClassifyList": {
          "rule": "repeated",
          "type": "AudioClassify",
          "id": 7
        }
      }
    },
    "ImageRequest": {
      "fields": {
        "image": {
          "type": "Image",
          "id": 1
        },
        "baseRequest": {
          "type": "BaseRequest",
          "id": 2
        }
      }
    },
    "BaseRequest": {
      "fields": {
        "token": {
          "type": "string",
          "id": 1
        },
        "p": {
          "type": "string",
          "id": 2
        },
        "sign": {
          "type": "string",
          "id": 3
        },
        "SpareParameter": {
          "keyType": "string",
          "type": "string",
          "id": 4
        }
      }
    },
    "LiveAudiences": {
      "fields": {
        "eventId": {
          "type": "int64",
          "id": 1
        },
        "spaceId": {
          "type": "int64",
          "id": 2
        },
        "userId": {
          "type": "int64",
          "id": 3
        },
        "userName": {
          "type": "string",
          "id": 4
        },
        "status": {
          "type": "int32",
          "id": 5
        },
        "enterTime": {
          "type": "int64",
          "id": 6
        },
        "liveId": {
          "type": "int64",
          "id": 7
        },
        "quitTime": {
          "type": "int64",
          "id": 8
        },
        "liveAudiencesList": {
          "rule": "repeated",
          "type": "LiveAudiences",
          "id": 9
        }
      }
    },
    "LiveInfo": {
      "fields": {
        "liveId": {
          "type": "int64",
          "id": 1
        },
        "cameraId": {
          "type": "int64",
          "id": 2
        },
        "liveTitle": {
          "type": "string",
          "id": 3
        },
        "liveAddress": {
          "type": "string",
          "id": 4
        },
        "spaceId": {
          "type": "int64",
          "id": 5
        },
        "liveType": {
          "type": "int32",
          "id": 6
        },
        "userId": {
          "type": "int64",
          "id": 7
        },
        "startTime": {
          "type": "int64",
          "id": 8
        },
        "stopTime": {
          "type": "int64",
          "id": 9
        },
        "liveStatus": {
          "type": "int32",
          "id": 10
        },
        "watchNumber": {
          "type": "int32",
          "id": 11
        },
        "livePrivate": {
          "type": "int32",
          "id": 12
        },
        "picId": {
          "type": "int64",
          "id": 13
        },
        "liveScore": {
          "type": "int32",
          "id": 14
        },
        "tagName": {
          "type": "string",
          "id": 15
        },
        "liveCover": {
          "type": "PictureInfo",
          "id": 16
        },
        "rtmpPlayUrl": {
          "type": "string",
          "id": 17
        },
        "hlsPlayUrl": {
          "type": "string",
          "id": 18
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 19
        },
        "liveInfoList": {
          "rule": "repeated",
          "type": "LiveInfo",
          "id": 20
        },
        "videoWidth": {
          "type": "int32",
          "id": 21
        },
        "videoHeight": {
          "type": "int32",
          "id": 22
        },
        "xCenter": {
          "type": "int32",
          "id": 23
        },
        "yCenter": {
          "type": "int32",
          "id": 24
        },
        "radius": {
          "type": "int32",
          "id": 25
        },
        "spaceNum": {
          "type": "string",
          "id": 26
        },
        "userName": {
          "type": "string",
          "id": 27
        },
        "spaceNmae": {
          "type": "string",
          "id": 28
        },
        "cameraName": {
          "type": "string",
          "id": 29
        },
        "vrUrl": {
          "type": "string",
          "id": 30
        },
        "livePassword": {
          "type": "string",
          "id": 31
        }
      }
    },
    "VRTopicSpaceReply": {
      "fields": {
        "vrTopicSpace": {
          "type": "VRTopicSpace",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "VRTopic": {
      "fields": {
        "topicId": {
          "type": "int32",
          "id": 1
        },
        "topicName": {
          "type": "string",
          "id": 2
        },
        "topicDesc": {
          "type": "string",
          "id": 3
        },
        "topicUrl": {
          "type": "string",
          "id": 4
        },
        "editTime": {
          "type": "int64",
          "id": 5
        },
        "editAdminId": {
          "type": "int32",
          "id": 6
        },
        "editAdminName": {
          "type": "string",
          "id": 7
        },
        "picId": {
          "type": "int64",
          "id": 8
        },
        "sortNum": {
          "type": "int32",
          "id": 9
        },
        "status": {
          "type": "int32",
          "id": 10
        },
        "iconPicId": {
          "type": "int64",
          "id": 11
        },
        "themeColor": {
          "type": "string",
          "id": 12
        },
        "top": {
          "type": "int32",
          "id": 13
        },
        "vrTopicList": {
          "rule": "repeated",
          "type": "VRTopic",
          "id": 14
        },
        "vrTopicSpace": {
          "type": "VRTopicSpace",
          "id": 15
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 16
        },
        "iconPictureInfo": {
          "type": "PictureInfo",
          "id": 17
        },
        "onLineCount": {
          "type": "int64",
          "id": 18
        }
      }
    },
    "LiveReply": {
      "fields": {
        "liveInfo": {
          "type": "LiveInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "LiveVideo": {
      "fields": {
        "videoId": {
          "type": "int64",
          "id": 1
        },
        "videoSize": {
          "type": "int32",
          "id": 2
        },
        "videoTime": {
          "type": "double",
          "id": 3
        },
        "liveType": {
          "type": "int32",
          "id": 4
        },
        "liveId": {
          "type": "int64",
          "id": 5
        },
        "liveTitle": {
          "type": "string",
          "id": 6
        },
        "liveTime": {
          "type": "int64",
          "id": 7
        },
        "cameraId": {
          "type": "int64",
          "id": 8
        },
        "userId": {
          "type": "int64",
          "id": 9
        },
        "playUrl": {
          "type": "string",
          "id": 10
        },
        "playTotal": {
          "type": "int32",
          "id": 11
        },
        "picid": {
          "type": "int64",
          "id": 12
        },
        "bitRate": {
          "type": "string",
          "id": 13
        },
        "resolution": {
          "type": "string",
          "id": 14
        },
        "liveVideoList": {
          "rule": "repeated",
          "type": "LiveVideo",
          "id": 15
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 16
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 17
        },
        "spaceNumber": {
          "type": "string",
          "id": 18
        },
        "soldNum": {
          "type": "sint64",
          "id": 19
        },
        "receiveRedBean": {
          "type": "double",
          "id": 20
        },
        "vrUrl": {
          "type": "string",
          "id": 21
        }
      }
    },
    "VRTopicSpace": {
      "fields": {
        "tsId": {
          "type": "int32",
          "id": 1
        },
        "topicId": {
          "type": "int32",
          "id": 2
        },
        "spaceId": {
          "type": "int64",
          "id": 3
        },
        "vrUrl": {
          "type": "int32",
          "id": 4
        },
        "vrTitle": {
          "type": "string",
          "id": 5
        },
        "vrDesc": {
          "type": "string",
          "id": 6
        },
        "vrPicId": {
          "type": "int64",
          "id": 7
        },
        "spaceAddress": {
          "type": "string",
          "id": 8
        },
        "sortNum": {
          "type": "int32",
          "id": 9
        },
        "editTime": {
          "type": "int64",
          "id": 10
        },
        "editAdminId": {
          "type": "int32",
          "id": 11
        },
        "editAdminName": {
          "type": "string",
          "id": 12
        },
        "classifyId": {
          "type": "int32",
          "id": 13
        },
        "vrTopicSpaceList": {
          "rule": "repeated",
          "type": "VRTopicSpace",
          "id": 14
        },
        "vrPictureInfo": {
          "type": "PictureInfo",
          "id": 16
        }
      }
    },
    "LiveVideoReply": {
      "fields": {
        "liveVideo": {
          "type": "LiveVideo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "MoneyInfo": {
      "fields": {
        "userId": {
          "type": "int64",
          "id": 1
        },
        "moneyBalance": {
          "type": "string",
          "id": 2
        },
        "redbeanBalance": {
          "type": "string",
          "id": 3
        },
        "redbeanCoinBalance": {
          "type": "string",
          "id": 4
        },
        "lockedMoneyBalance": {
          "type": "string",
          "id": 5
        },
        "sincerityMoneyBalance": {
          "type": "string",
          "id": 6
        },
        "moneyInfoList": {
          "rule": "repeated",
          "type": "MoneyInfo",
          "id": 7
        }
      }
    },
    "NoticeInfo": {
      "fields": {
        "noticeId": {
          "type": "int64",
          "id": 1
        },
        "userId": {
          "type": "int64",
          "id": 2
        },
        "userName": {
          "type": "string",
          "id": 3
        },
        "spaceId": {
          "type": "int64",
          "id": 4
        },
        "spaceName": {
          "type": "string",
          "id": 5
        },
        "liveTitle": {
          "type": "string",
          "id": 6
        },
        "liveTime": {
          "type": "int64",
          "id": 7
        },
        "createTime": {
          "type": "int64",
          "id": 8
        },
        "state": {
          "type": "int32",
          "id": 9
        },
        "picId": {
          "type": "int64",
          "id": 10
        },
        "spaceTag": {
          "type": "int32",
          "id": 11
        },
        "spaceLevel": {
          "type": "int32",
          "id": 12
        },
        "noticeAlert": {
          "type": "bool",
          "id": 13
        },
        "userHead": {
          "type": "PictureInfo",
          "id": 14
        },
        "noticeInfoList": {
          "rule": "repeated",
          "type": "NoticeInfo",
          "id": 15
        },
        "spaceVerify": {
          "type": "SpaceVerify",
          "id": 16
        },
        "liveDesc": {
          "type": "string",
          "id": 17
        }
      }
    },
    "SMNoticeInfo": {
      "fields": {
        "newsId": {
          "type": "int32",
          "id": 1
        },
        "newsTitle": {
          "type": "string",
          "id": 2
        },
        "newsContext": {
          "type": "string",
          "id": 3
        },
        "newsKeys": {
          "type": "string",
          "id": 4
        },
        "description": {
          "type": "string",
          "id": 5
        },
        "source": {
          "type": "string",
          "id": 6
        },
        "picId": {
          "type": "int64",
          "id": 7
        },
        "issuerId": {
          "type": "int32",
          "id": 8
        },
        "modifierId": {
          "type": "int32",
          "id": 9
        },
        "modifyTime": {
          "type": "int64",
          "id": 10
        },
        "issueTime": {
          "type": "int64",
          "id": 11
        },
        "status": {
          "type": "int32",
          "id": 12
        },
        "newsType": {
          "type": "int32",
          "id": 13
        },
        "newsUrl": {
          "type": "string",
          "id": 14
        },
        "smnoticeInfoList": {
          "rule": "repeated",
          "type": "SMNoticeInfo",
          "id": 15
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 16
        }
      }
    },
    "NoticeInfoReply": {
      "fields": {
        "smnoticeInfo": {
          "type": "SMNoticeInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "NoticeReply": {
      "fields": {
        "noticeInfo": {
          "type": "NoticeInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "OrderInfo": {
      "fields": {
        "orderId": {
          "type": "int64",
          "id": 1
        },
        "orderNumber": {
          "type": "string",
          "id": 2
        },
        "orderTime": {
          "type": "int64",
          "id": 3
        },
        "orderAmount": {
          "type": "double",
          "id": 4
        },
        "orderStatus": {
          "type": "int32",
          "id": 5
        },
        "orderPostage": {
          "type": "double",
          "id": 6
        },
        "spaceId": {
          "type": "int64",
          "id": 7
        },
        "spaceName": {
          "type": "string",
          "id": 8
        },
        "userId": {
          "type": "int64",
          "id": 9
        },
        "userName": {
          "type": "string",
          "id": 10
        },
        "userPhone": {
          "type": "string",
          "id": 11
        },
        "payTime": {
          "type": "int64",
          "id": 12
        },
        "finnshedTime": {
          "type": "int64",
          "id": 13
        },
        "productsAmount": {
          "type": "double",
          "id": 14
        },
        "evaluationState": {
          "type": "int32",
          "id": 15
        },
        "searchKey": {
          "type": "string",
          "id": 16
        },
        "deleteStatus": {
          "type": "int32",
          "id": 17
        },
        "receiveName": {
          "type": "string",
          "id": 18
        },
        "receiveAddress": {
          "type": "string",
          "id": 19
        },
        "receivePhone": {
          "type": "string",
          "id": 20
        },
        "orderNote": {
          "type": "string",
          "id": 21
        },
        "transportNumber": {
          "type": "string",
          "id": 22
        },
        "transportCompany": {
          "type": "string",
          "id": 23
        },
        "payDesc": {
          "type": "string",
          "id": 24
        },
        "isRefund": {
          "type": "int32",
          "id": 25
        },
        "parentId": {
          "type": "int64",
          "id": 26
        },
        "orderProduct": {
          "type": "OrderProduct",
          "id": 27
        },
        "sendName": {
          "type": "string",
          "id": 28
        },
        "sendPhone": {
          "type": "string",
          "id": 29
        },
        "sendAddress": {
          "type": "string",
          "id": 30
        },
        "orderList": {
          "rule": "repeated",
          "type": "OrderInfo",
          "id": 31
        },
        "spaceInfo": {
          "type": "SpaceInfo",
          "id": 32
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 33
        },
        "supplierOrderAmount": {
          "type": "double",
          "id": 34
        },
        "orderRefund": {
          "type": "OrderRefund",
          "id": 35
        },
        "supplierSpaceInfo": {
          "type": "SpaceInfo",
          "id": 36
        },
        "payId": {
          "type": "string",
          "id": 37
        },
        "transportType": {
          "type": "int32",
          "id": 38
        },
        "orderPercentPrice": {
          "type": "double",
          "id": 39
        },
        "orderSource": {
          "type": "int32",
          "id": 40
        },
        "changePrice": {
          "type": "int32",
          "id": 41
        },
        "sellerMark": {
          "type": "string",
          "id": 42
        },
        "printInvoice": {
          "type": "int32",
          "id": 43
        },
        "printExpress": {
          "type": "int32",
          "id": 44
        },
        "closeReason": {
          "type": "string",
          "id": 45
        },
        "addressProvincesInfo": {
          "type": "string",
          "id": 46
        },
        "addressCityInfo": {
          "type": "string",
          "id": 47
        },
        "addressDistrictInfo": {
          "type": "string",
          "id": 48
        },
        "addressStreet": {
          "type": "string",
          "id": 49
        },
        "grActivityId": {
          "type": "int64",
          "id": 50
        },
        "groupCollageId": {
          "type": "int64",
          "id": 51
        },
        "grActivityPublish": {
          "type": "GRActivityPublish",
          "id": 52
        },
        "couponId": {
          "type": "int64",
          "id": 53
        },
        "couponDiscountAmount": {
          "type": "double",
          "id": 54
        }
      }
    },
    "OrderProduct": {
      "fields": {
        "orderId": {
          "type": "int64",
          "id": 1
        },
        "productId": {
          "type": "int64",
          "id": 2
        },
        "productName": {
          "type": "string",
          "id": 3
        },
        "productPrice": {
          "type": "double",
          "id": 4
        },
        "productNum": {
          "type": "int32",
          "id": 5
        },
        "productImage": {
          "type": "string",
          "id": 6
        },
        "productPayPrice": {
          "type": "double",
          "id": 7
        },
        "spaceId": {
          "type": "int64",
          "id": 8
        },
        "userId": {
          "type": "int64",
          "id": 9
        },
        "productType": {
          "type": "string",
          "id": 10
        },
        "productCategoryCode": {
          "type": "int32",
          "id": 11
        },
        "productCategoryDesc": {
          "type": "string",
          "id": 12
        },
        "inventoryId": {
          "type": "int64",
          "id": 13
        },
        "productOptionDesc": {
          "type": "string",
          "id": 14
        },
        "productPicture": {
          "type": "PictureInfo",
          "id": 15
        },
        "orderProductList": {
          "rule": "repeated",
          "type": "OrderProduct",
          "id": 16
        },
        "refundId": {
          "type": "int64",
          "id": 17
        },
        "refundStatus": {
          "type": "int32",
          "id": 18
        }
      }
    },
    "OrderRefund": {
      "fields": {
        "refundId": {
          "type": "int64",
          "id": 1
        },
        "orderId": {
          "type": "int64",
          "id": 2
        },
        "orderNum": {
          "type": "string",
          "id": 3
        },
        "refundNum": {
          "type": "string",
          "id": 4
        },
        "spaceId": {
          "type": "int64",
          "id": 5
        },
        "spaceName": {
          "type": "string",
          "id": 6
        },
        "userId": {
          "type": "int64",
          "id": 7
        },
        "userName": {
          "type": "string",
          "id": 8
        },
        "refundAmount": {
          "type": "double",
          "id": 9
        },
        "orderGoodsType": {
          "type": "int32",
          "id": 10
        },
        "refundType": {
          "type": "int32",
          "id": 11
        },
        "sellerStatus": {
          "type": "int32",
          "id": 12
        },
        "refundStatus": {
          "type": "int32",
          "id": 13
        },
        "returnType": {
          "type": "int32",
          "id": 14
        },
        "orderLock": {
          "type": "int32",
          "id": 15
        },
        "orderStatus": {
          "type": "int32",
          "id": 16
        },
        "addTime": {
          "type": "int64",
          "id": 17
        },
        "sellerTime": {
          "type": "int64",
          "id": 18
        },
        "appealTime": {
          "type": "int64",
          "id": 19
        },
        "adminTime": {
          "type": "int64",
          "id": 20
        },
        "reasonInfo": {
          "type": "string",
          "id": 21
        },
        "buyerMessage": {
          "type": "string",
          "id": 22
        },
        "sellerMessage": {
          "type": "string",
          "id": 23
        },
        "adminMessage": {
          "type": "string",
          "id": 24
        },
        "expressName": {
          "type": "string",
          "id": 25
        },
        "invoiceNo": {
          "type": "string",
          "id": 26
        },
        "shipTime": {
          "type": "int64",
          "id": 27
        },
        "receiveTime": {
          "type": "int64",
          "id": 28
        },
        "receiveMessage": {
          "type": "string",
          "id": 29
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 30
        },
        "productId": {
          "type": "int64",
          "id": 31
        },
        "productInfo": {
          "type": "ProductInfo",
          "id": 32
        },
        "orderRefund": {
          "rule": "repeated",
          "type": "OrderRefund",
          "id": 33
        },
        "parentId": {
          "type": "int64",
          "id": 34
        },
        "refundCash": {
          "type": "int32",
          "id": 35
        },
        "refundCashTime": {
          "type": "int64",
          "id": 36
        },
        "refundAddress": {
          "type": "string",
          "id": 37
        },
        "spaceHead": {
          "type": "PictureInfo",
          "id": 38
        },
        "userHead": {
          "type": "PictureInfo",
          "id": 39
        },
        "buyerTime": {
          "type": "int64",
          "id": 40
        },
        "refundMessage": {
          "type": "string",
          "id": 41
        },
        "refundCause": {
          "type": "string",
          "id": 42
        },
        "receiveFlag": {
          "type": "string",
          "id": 43
        },
        "inventoryId": {
          "type": "int64",
          "id": 44
        }
      }
    },
    "OrderRefundReply": {
      "fields": {
        "orderRefund": {
          "type": "OrderRefund",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "OrderReply": {
      "fields": {
        "orderInfo": {
          "type": "OrderInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "ProductCategory": {
      "fields": {
        "productCategoryCode": {
          "type": "int64",
          "id": 1
        },
        "productCategoryName": {
          "type": "string",
          "id": 2
        },
        "parentCode": {
          "type": "int64",
          "id": 3
        },
        "status": {
          "type": "int32",
          "id": 4
        },
        "productCategoryList": {
          "rule": "repeated",
          "type": "ProductCategory",
          "id": 5
        },
        "picId": {
          "type": "int64",
          "id": 6
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 7
        },
        "deep": {
          "type": "int32",
          "id": 8
        },
        "categoryPercent": {
          "type": "double",
          "id": 9
        }
      }
    },
    "ProductComment": {
      "fields": {
        "commentId": {
          "type": "int64",
          "id": 1
        },
        "productId": {
          "type": "int64",
          "id": 2
        },
        "commentTime": {
          "type": "int64",
          "id": 3
        },
        "commentScore": {
          "type": "int32",
          "id": 4
        },
        "uesrId": {
          "type": "int64",
          "id": 5
        },
        "status": {
          "type": "int32",
          "id": 6
        },
        "commentDesc": {
          "type": "string",
          "id": 7
        },
        "productCommentList": {
          "rule": "repeated",
          "type": "ProductComment",
          "id": 8
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 9
        },
        "commentScoreAVG": {
          "type": "double",
          "id": 10
        },
        "commentPicture": {
          "type": "PictureInfo",
          "id": 11
        },
        "showName": {
          "type": "int32",
          "id": 12
        },
        "productOptionDesc": {
          "type": "string",
          "id": 13
        }
      }
    },
    "ProductInfo": {
      "fields": {
        "productId": {
          "type": "int64",
          "id": 1
        },
        "productName": {
          "type": "string",
          "id": 2
        },
        "productNamePhonetic": {
          "type": "string",
          "id": 3
        },
        "productNamePhonetichead": {
          "type": "string",
          "id": 4
        },
        "productPrice": {
          "type": "double",
          "id": 5
        },
        "productCategoryCode": {
          "type": "int32",
          "id": 6
        },
        "productCategoryDesc": {
          "type": "string",
          "id": 7
        },
        "productStatue": {
          "type": "int32",
          "id": 8
        },
        "productVerify": {
          "type": "int32",
          "id": 9
        },
        "productFreight": {
          "type": "double",
          "id": 10
        },
        "productKeys": {
          "type": "string",
          "id": 11
        },
        "productStorageAlarm": {
          "type": "string",
          "id": 12
        },
        "productImage": {
          "type": "string",
          "id": 13
        },
        "productAddtime": {
          "type": "int64",
          "id": 14
        },
        "productEdittime": {
          "type": "int64",
          "id": 15
        },
        "productDesc": {
          "type": "string",
          "id": 16
        },
        "spaceId": {
          "type": "int64",
          "id": 17
        },
        "spaceName": {
          "type": "string",
          "id": 18
        },
        "picId": {
          "type": "int64",
          "id": 19
        },
        "videoId": {
          "type": "int64",
          "id": 20
        },
        "transportId": {
          "type": "int32",
          "id": 21
        },
        "columnId": {
          "type": "int64",
          "id": 22
        },
        "productSalePrice": {
          "type": "double",
          "id": 23
        },
        "productPurchasePrice": {
          "type": "double",
          "id": 24
        },
        "resaleTag": {
          "type": "int32",
          "id": 25
        },
        "resaleCommission": {
          "type": "double",
          "id": 26
        },
        "productNumber": {
          "type": "string",
          "id": 27
        },
        "productWeight": {
          "type": "double",
          "id": 28
        },
        "parentId": {
          "type": "int64",
          "id": 29
        },
        "collection": {
          "type": "int32",
          "id": 30
        },
        "review": {
          "type": "int32",
          "id": 31
        },
        "sales": {
          "type": "int32",
          "id": 32
        },
        "spaceTag": {
          "type": "string",
          "id": 33
        },
        "productPicture": {
          "type": "PictureInfo",
          "id": 34
        },
        "productInventory": {
          "type": "ProductInventory",
          "id": 35
        },
        "productSku": {
          "type": "ProductSku",
          "id": 36
        },
        "productSkuOption": {
          "type": "ProductSkuOption",
          "id": 37
        },
        "productImageList": {
          "rule": "repeated",
          "type": "PictureInfo",
          "id": 38
        },
        "productInfoList": {
          "rule": "repeated",
          "type": "ProductInfo",
          "id": 39
        },
        "isCollection": {
          "type": "bool",
          "id": 40
        },
        "spaceInfo": {
          "type": "SpaceInfo",
          "id": 41
        },
        "spaceProductRecom": {
          "type": "SpaceProductRecom",
          "id": 42
        },
        "videoInfo": {
          "type": "VideoInfo",
          "id": 43
        },
        "totalInventory": {
          "type": "int64",
          "id": 44
        },
        "parentStatus": {
          "type": "int32",
          "id": 45
        },
        "priceTag": {
          "type": "int32",
          "id": 48
        },
        "qrcodeId": {
          "type": "int64",
          "id": 49
        },
        "qrcodePicture": {
          "type": "PictureInfo",
          "id": 50
        },
        "freight": {
          "type": "ProductFreight",
          "id": 51
        },
        "templateId": {
          "type": "int64",
          "id": 52
        },
        "productVolume": {
          "type": "double",
          "id": 53
        },
        "productPercentPrice": {
          "type": "double",
          "id": 54
        },
        "productCacheScore": {
          "type": "int32",
          "id": 55
        },
        "productScore": {
          "type": "int32",
          "id": 56
        },
        "isLive": {
          "type": "bool",
          "id": 57
        },
        "isChecked": {
          "type": "bool",
          "id": 58
        },
        "sortNum": {
          "type": "int32",
          "id": 59
        },
        "productSize": {
          "type": "string",
          "id": 60
        },
        "productMaterial": {
          "type": "string",
          "id": 61
        },
        "bannePicId": {
          "type": "int64",
          "id": 62
        },
        "bannerPicUrl": {
          "type": "string",
          "id": 63
        },
        "columnName": {
          "type": "string",
          "id": 64
        },
        "grActivityPublish": {
          "type": "GRActivityPublish",
          "id": 65
        }
      }
    },
    "GRActivityPublish": {
      "fields": {
        "productId": {
          "type": "int64",
          "id": 1
        },
        "userId": {
          "type": "int64",
          "id": 2
        },
        "spaceId": {
          "type": "int64",
          "id": 3
        },
        "productGroupLowPrice": {
          "type": "double",
          "id": 4
        },
        "groupNumber": {
          "type": "int32",
          "id": 5
        },
        "groupAvailabletime": {
          "type": "int32",
          "id": 6
        },
        "islimited": {
          "type": "int32",
          "id": 7
        },
        "limitedNumber": {
          "type": "int32",
          "id": 8
        },
        "iscouponed": {
          "type": "int32",
          "id": 9
        },
        "activityStarttime": {
          "type": "int64",
          "id": 10
        },
        "activityEndtime": {
          "type": "int64",
          "id": 11
        },
        "activityStatus": {
          "type": "int32",
          "id": 12
        },
        "activityCreatetime": {
          "type": "int64",
          "id": 13
        },
        "activityUpdatetime": {
          "type": "int64",
          "id": 14
        },
        "deleted": {
          "type": "int32",
          "id": 15
        },
        "grActivityPublishs": {
          "rule": "repeated",
          "type": "GRActivityPublish",
          "id": 16
        },
        "isgroupAvailabletime": {
          "type": "int32",
          "id": 17
        },
        "groupCount": {
          "type": "int32",
          "id": 18
        },
        "grActivityGroup": {
          "type": "GRActivityGroup",
          "id": 19
        },
        "grActivityId": {
          "type": "int64",
          "id": 20
        },
        "otherActivityGroup": {
          "type": "GRActivityGroup",
          "id": 21
        }
      }
    },
    "GRActivityUsers": {
      "fields": {
        "productId": {
          "type": "int64",
          "id": 1
        },
        "groupId": {
          "type": "int64",
          "id": 2
        },
        "offeredUserId": {
          "type": "int64",
          "id": 3
        },
        "offeredCreatetime": {
          "type": "int64",
          "id": 4
        },
        "isgroupuser": {
          "type": "int32",
          "id": 5
        },
        "issuccessed": {
          "type": "int32",
          "id": 6
        },
        "grActivityUserlist": {
          "rule": "repeated",
          "type": "GRActivityUsers",
          "id": 7
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 8
        },
        "grActivityId": {
          "type": "int64",
          "id": 9
        }
      }
    },
    "GRActivityGroup": {
      "fields": {
        "groupId": {
          "type": "int64",
          "id": 1
        },
        "productId": {
          "type": "int64",
          "id": 2
        },
        "groupUsercount": {
          "type": "int32",
          "id": 3
        },
        "successUsercount": {
          "type": "int32",
          "id": 4
        },
        "groupStatus": {
          "type": "int32",
          "id": 5
        },
        "groupUserId": {
          "type": "int64",
          "id": 6
        },
        "groupCreatetime": {
          "type": "int64",
          "id": 7
        },
        "grActivityGroups": {
          "rule": "repeated",
          "type": "GRActivityGroup",
          "id": 8
        },
        "groupAvailabletime": {
          "type": "int32",
          "id": 9
        },
        "disanceCount": {
          "type": "int32",
          "id": 10
        },
        "endSecond": {
          "type": "int64",
          "id": 11
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 12
        },
        "grActivityUsers": {
          "type": "GRActivityUsers",
          "id": 13
        },
        "grActivityId": {
          "type": "int64",
          "id": 14
        },
        "activityEndtime": {
          "type": "int64",
          "id": 15
        }
      }
    },
    "GRSKUInventory": {
      "fields": {
        "inventoryId": {
          "type": "int64",
          "id": 1
        },
        "productId": {
          "type": "int64",
          "id": 2
        },
        "productPrice": {
          "type": "double",
          "id": 3
        },
        "groupInventory": {
          "type": "int32",
          "id": 4
        },
        "grSKUInventorys": {
          "rule": "repeated",
          "type": "GRSKUInventory",
          "id": 5
        },
        "grActivityId": {
          "type": "int64",
          "id": 6
        }
      }
    },
    "ProductInventory": {
      "fields": {
        "inventoryId": {
          "type": "int64",
          "id": 1
        },
        "productId": {
          "type": "int64",
          "id": 2
        },
        "productSkuOption": {
          "type": "string",
          "id": 3
        },
        "productPrice": {
          "type": "double",
          "id": 4
        },
        "resalePrice": {
          "type": "double",
          "id": 5
        },
        "productInventory": {
          "type": "int32",
          "id": 6
        },
        "status": {
          "type": "int32",
          "id": 7
        },
        "picId": {
          "type": "int64",
          "id": 8
        },
        "inventoryImage": {
          "type": "PictureInfo",
          "id": 9
        },
        "inventoryList": {
          "rule": "repeated",
          "type": "ProductInventory",
          "id": 10
        },
        "productSkuOptionList": {
          "rule": "repeated",
          "type": "ProductSkuOption",
          "id": 11
        },
        "fatherId": {
          "type": "int64",
          "id": 12
        },
        "buyNum": {
          "type": "int32",
          "id": 13
        },
        "grSKUInventory": {
          "type": "GRSKUInventory",
          "id": 14
        }
      }
    },
    "ProductReply": {
      "fields": {
        "productInfo": {
          "type": "ProductInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "ProductSku": {
      "fields": {
        "psId": {
          "type": "int64",
          "id": 1
        },
        "skuId": {
          "type": "int64",
          "id": 2
        },
        "productId": {
          "type": "int64",
          "id": 3
        },
        "skuInfo": {
          "type": "SkuInfo",
          "id": 4
        },
        "productSkuList": {
          "rule": "repeated",
          "type": "ProductSku",
          "id": 5
        },
        "productSkuOption": {
          "type": "ProductSkuOption",
          "id": 6
        }
      }
    },
    "RedBeanModel": {
      "fields": {
        "modelId": {
          "type": "int32",
          "id": 1
        },
        "modelName": {
          "type": "string",
          "id": 2
        },
        "modelValue": {
          "type": "double",
          "id": 3
        },
        "modelRmb": {
          "type": "double",
          "id": 4
        },
        "modelType": {
          "type": "string",
          "id": 5
        },
        "modelIco": {
          "type": "string",
          "id": 6
        },
        "appleId": {
          "type": "string",
          "id": 7
        },
        "modelList": {
          "rule": "repeated",
          "type": "RedBeanModel",
          "id": 8
        }
      }
    },
    "RoomBlack": {
      "fields": {
        "blackId": {
          "type": "int64",
          "id": 1
        },
        "spaceId": {
          "type": "int64",
          "id": 2
        },
        "userId": {
          "type": "int64",
          "id": 3
        },
        "addTime": {
          "type": "int64",
          "id": 4
        },
        "fromUserId": {
          "type": "int64",
          "id": 5
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 6
        },
        "roomBlackList": {
          "rule": "repeated",
          "type": "RoomBlack",
          "id": 7
        }
      }
    },
    "RoomBlackReply": {
      "fields": {
        "roomBlack": {
          "type": "RoomBlack",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "RoomManager": {
      "fields": {
        "managerId": {
          "type": "int64",
          "id": 1
        },
        "userId": {
          "type": "int64",
          "id": 2
        },
        "spaceId": {
          "type": "int64",
          "id": 3
        },
        "addTime": {
          "type": "int64",
          "id": 4
        },
        "roomManager": {
          "rule": "repeated",
          "type": "RoomManager",
          "id": 5
        },
        "spaceInfo": {
          "type": "SpaceInfo",
          "id": 6
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 7
        }
      }
    },
    "ShareInfo": {
      "fields": {
        "paramId": {
          "type": "int32",
          "id": 1
        },
        "paramName": {
          "type": "string",
          "id": 2
        },
        "paramTitle": {
          "type": "string",
          "id": 3
        },
        "paramDesc": {
          "type": "string",
          "id": 4
        },
        "paramType": {
          "type": "int32",
          "id": 5
        },
        "paramUrl": {
          "type": "string",
          "id": 6
        },
        "paramStatus": {
          "type": "int32",
          "id": 7
        },
        "shareApp": {
          "type": "int32",
          "id": 8
        },
        "shareInfoList": {
          "rule": "repeated",
          "type": "ShareInfo",
          "id": 15
        }
      }
    },
    "SkuInfo": {
      "fields": {
        "skuId": {
          "type": "int64",
          "id": 1
        },
        "productCategoryCode": {
          "type": "int32",
          "id": 2
        },
        "skuName": {
          "type": "string",
          "id": 3
        },
        "skuDesc": {
          "type": "string",
          "id": 4
        },
        "skuInfoList": {
          "rule": "repeated",
          "type": "SkuInfo",
          "id": 5
        },
        "skuOptionInfo": {
          "type": "SkuOptionInfo",
          "id": 6
        }
      }
    },
    "SpaceBanner": {
      "fields": {
        "spaceId": {
          "type": "int64",
          "id": 1
        },
        "picId": {
          "type": "int64",
          "id": 2
        },
        "status": {
          "type": "int32",
          "id": 3
        },
        "addTime": {
          "type": "int64",
          "id": 4
        },
        "spaceBanner": {
          "rule": "repeated",
          "type": "SpaceBanner",
          "id": 5
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 6
        }
      }
    },
    "SpaceClassify": {
      "fields": {
        "classifyId": {
          "type": "int32",
          "id": 1
        },
        "classifyName": {
          "type": "string",
          "id": 2
        },
        "parentId": {
          "type": "int32",
          "id": 3
        },
        "status": {
          "type": "int32",
          "id": 4
        },
        "areaId": {
          "type": "int32",
          "id": 5
        },
        "orderNum": {
          "type": "int32",
          "id": 6
        },
        "classifyList": {
          "rule": "repeated",
          "type": "SpaceClassify",
          "id": 7
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 8
        }
      }
    },
    "SpaceColumn": {
      "fields": {
        "columnId": {
          "type": "int32",
          "id": 1
        },
        "columnName": {
          "type": "string",
          "id": 2
        },
        "spaceId": {
          "type": "int64",
          "id": 3
        },
        "columnOrder": {
          "type": "int32",
          "id": 4
        },
        "columnStatus": {
          "type": "int32",
          "id": 5
        },
        "spaceColumns": {
          "rule": "repeated",
          "type": "SpaceColumn",
          "id": 6
        }
      }
    },
    "SpaceInfo": {
      "fields": {
        "spaceId": {
          "type": "int64",
          "id": 1
        },
        "spaceNum": {
          "type": "string",
          "id": 2
        },
        "spaceName": {
          "type": "string",
          "id": 3
        },
        "spaceNamePhonetic": {
          "type": "string",
          "id": 4
        },
        "spaceNamePhoneticHead": {
          "type": "string",
          "id": 5
        },
        "spaceAddress": {
          "type": "string",
          "id": 6
        },
        "spaceType": {
          "type": "string",
          "id": 7
        },
        "spaceNotice": {
          "type": "string",
          "id": 8
        },
        "spaceContact": {
          "type": "string",
          "id": 9
        },
        "spacePhone": {
          "type": "string",
          "id": 10
        },
        "spaceLevel": {
          "type": "int32",
          "id": 11
        },
        "createTime": {
          "type": "int64",
          "id": 12
        },
        "userId": {
          "type": "int64",
          "id": 13
        },
        "status": {
          "type": "int32",
          "id": 14
        },
        "classifyId": {
          "type": "int32",
          "id": 15
        },
        "classifyName": {
          "type": "string",
          "id": 16
        },
        "spaceInfo": {
          "type": "string",
          "id": 17
        },
        "spaceScore": {
          "type": "int32",
          "id": 18
        },
        "verifyStatus": {
          "type": "int32",
          "id": 19
        },
        "spaceMain": {
          "type": "string",
          "id": 20
        },
        "spaceArea": {
          "type": "int32",
          "id": 21
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 22
        },
        "spaceVideo": {
          "type": "SpaceVideo",
          "id": 23
        },
        "spaceColumn": {
          "type": "SpaceColumn",
          "id": 24
        },
        "spaceInfoList": {
          "rule": "repeated",
          "type": "SpaceInfo",
          "id": 25
        },
        "spaceBanner": {
          "type": "SpaceBanner",
          "id": 26
        },
        "productCount": {
          "type": "int32",
          "id": 27
        },
        "sales": {
          "type": "int32",
          "id": 28
        },
        "collection": {
          "type": "int32",
          "id": 29
        },
        "isCollection": {
          "type": "bool",
          "id": 30
        },
        "orderUnpay": {
          "type": "int32",
          "id": 31
        },
        "orderUnShip": {
          "type": "int32",
          "id": 32
        },
        "orderUnReceive": {
          "type": "int32",
          "id": 33
        },
        "orderUnComment": {
          "type": "int32",
          "id": 34
        },
        "orderRefunds": {
          "type": "int32",
          "id": 35
        },
        "messageCount": {
          "type": "int32",
          "id": 36
        },
        "liveInfo": {
          "type": "LiveInfo",
          "id": 37
        },
        "liveVideo": {
          "type": "LiveVideo",
          "id": 38
        },
        "liveAudiences": {
          "type": "int64",
          "id": 39
        },
        "spaceVerify": {
          "type": "SpaceVerify",
          "id": 40
        },
        "wapVerify": {
          "type": "WapVerify",
          "id": 41
        },
        "longitude": {
          "type": "string",
          "id": 42
        },
        "latitude": {
          "type": "string",
          "id": 43
        },
        "isVip": {
          "type": "bool",
          "id": 44
        },
        "isDeposit": {
          "type": "bool",
          "id": 45
        },
        "todayTransactionAmount": {
          "type": "string",
          "id": 46
        },
        "todayOrderCount": {
          "type": "int32",
          "id": 47
        },
        "todayVisitorCount": {
          "type": "int32",
          "id": 48
        },
        "haveLicensePhotos": {
          "type": "bool",
          "id": 49
        },
        "isVr": {
          "type": "int32",
          "id": 50
        },
        "vrUrl": {
          "type": "string",
          "id": 60
        },
        "vipType": {
          "type": "int32",
          "id": 61
        },
        "groupId": {
          "type": "int32",
          "id": 62
        },
        "distance": {
          "type": "double",
          "id": 63
        }
      }
    },
    "SpaceProductRecom": {
      "fields": {
        "productId": {
          "type": "int64",
          "id": 1
        },
        "spaceId": {
          "type": "int64",
          "id": 2
        },
        "orderNumber": {
          "type": "int32",
          "id": 3
        },
        "recomType": {
          "type": "int32",
          "id": 4
        },
        "spaceProductRecomList": {
          "rule": "repeated",
          "type": "SpaceProductRecom",
          "id": 5
        }
      }
    },
    "SpaceReply": {
      "fields": {
        "spaceInfo": {
          "type": "SpaceInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        },
        "spaceWithProduct": {
          "type": "SpaceWithProduct",
          "id": 3
        }
      }
    },
    "SpaceVerify": {
      "fields": {
        "verifyId": {
          "type": "int64",
          "id": 1
        },
        "verifyName": {
          "type": "string",
          "id": 2
        },
        "verifyPhone": {
          "type": "string",
          "id": 3
        },
        "verifyNo": {
          "type": "string",
          "id": 4
        },
        "verifyType": {
          "type": "int32",
          "id": 5
        },
        "submitTime": {
          "type": "int64",
          "id": 6
        },
        "spaceId": {
          "type": "int64",
          "id": 7
        },
        "spaceName": {
          "type": "string",
          "id": 8
        },
        "userId": {
          "type": "int64",
          "id": 9
        },
        "userName": {
          "type": "string",
          "id": 10
        },
        "cameraNo": {
          "type": "string",
          "id": 11
        },
        "verifyStatus": {
          "type": "int32",
          "id": 12
        },
        "verifySpaceName": {
          "type": "string",
          "id": 13
        },
        "activePlatform": {
          "type": "string",
          "id": 14
        },
        "fanNum": {
          "type": "int32",
          "id": 15
        },
        "wechatNumber": {
          "type": "string",
          "id": 16
        },
        "licenseNumber": {
          "type": "string",
          "id": 17
        },
        "sourceAddress": {
          "type": "string",
          "id": 18
        },
        "soruceProduct": {
          "type": "string",
          "id": 19
        },
        "verifyAdminId": {
          "type": "int32",
          "id": 20
        },
        "verifyAdminName": {
          "type": "string",
          "id": 21
        },
        "verifyDetails": {
          "type": "string",
          "id": 22
        },
        "spaceVerifys": {
          "rule": "repeated",
          "type": "SpaceVerify",
          "id": 23
        },
        "spaceVerifyPicture": {
          "type": "SpaceVerifyPicture",
          "id": 24
        },
        "passportNo": {
          "type": "string",
          "id": 25
        },
        "addressId": {
          "type": "int32",
          "id": 26
        },
        "addressInfo": {
          "type": "AddressInfo",
          "id": 27
        },
        "classifyId": {
          "type": "int32",
          "id": 28
        },
        "classifyName": {
          "type": "string",
          "id": 29
        },
        "expressCompany": {
          "type": "string",
          "id": 30
        },
        "expressCompanyCode": {
          "type": "string",
          "id": 31
        },
        "trackingNumber": {
          "type": "string",
          "id": 32
        }
      }
    },
    "SpaceVerifyPicture": {
      "fields": {
        "verifyId": {
          "type": "int64",
          "id": 1
        },
        "picId": {
          "type": "int64",
          "id": 2
        },
        "picType": {
          "type": "int32",
          "id": 3
        },
        "spaceVerifyPictures": {
          "rule": "repeated",
          "type": "SpaceVerifyPicture",
          "id": 4
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 5
        }
      }
    },
    "SpaceVideo": {
      "fields": {
        "spaceId": {
          "type": "int32",
          "id": 1
        },
        "videoId": {
          "type": "int32",
          "id": 2
        },
        "status": {
          "type": "int32",
          "id": 3
        },
        "addTime": {
          "type": "int64",
          "id": 4
        },
        "spaceVideos": {
          "rule": "repeated",
          "type": "SpaceVideo",
          "id": 5
        },
        "videoInfo": {
          "type": "VideoInfo",
          "id": 6
        }
      }
    },
    "SpaceWithProduct": {
      "fields": {
        "spaceInfo": {
          "type": "SpaceInfo",
          "id": 1
        },
        "productInfo": {
          "type": "ProductInfo",
          "id": 2
        },
        "spaceWithProductList": {
          "rule": "repeated",
          "type": "SpaceWithProduct",
          "id": 3
        }
      }
    },
    "SUHomeSelection": {
      "fields": {
        "selectionId": {
          "type": "int32",
          "id": 1
        },
        "selectionName": {
          "type": "string",
          "id": 2
        },
        "selectionTitle": {
          "type": "string",
          "id": 3
        },
        "editTime": {
          "type": "int64",
          "id": 4
        },
        "picId": {
          "type": "int64",
          "id": 5
        },
        "sortNum": {
          "type": "int32",
          "id": 6
        },
        "status": {
          "type": "int32",
          "id": 7
        },
        "suHomeSelectionList": {
          "rule": "repeated",
          "type": "SUHomeSelection",
          "id": 8
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 9
        },
        "iconPicId": {
          "type": "int64",
          "id": 10
        },
        "bannerPicId": {
          "type": "int64",
          "id": 11
        },
        "iconPictureInfo": {
          "type": "PictureInfo",
          "id": 12
        },
        "bannerPictureInfo": {
          "type": "PictureInfo",
          "id": 13
        }
      }
    },
    "SUHomeSelectionSpace": {
      "fields": {
        "spaceId": {
          "type": "int64",
          "id": 1
        },
        "selectionId": {
          "type": "int32",
          "id": 2
        },
        "sortNum": {
          "type": "int32",
          "id": 3
        },
        "picId": {
          "type": "int64",
          "id": 4
        },
        "title": {
          "type": "string",
          "id": 5
        },
        "discount": {
          "type": "string",
          "id": 6
        },
        "suHomeSelectionSpaceList": {
          "rule": "repeated",
          "type": "SUHomeSelectionSpace",
          "id": 7
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 8
        }
      }
    },
    "SUHomeSelectionSpaceReply": {
      "fields": {
        "suHomeSelectionSpace": {
          "type": "SUHomeSelectionSpace",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "TradeInfo": {
      "fields": {
        "payId": {
          "type": "string",
          "id": 1
        },
        "payMoney": {
          "type": "double",
          "id": 2
        },
        "payTime": {
          "type": "int64",
          "id": 3
        },
        "payType": {
          "type": "int32",
          "id": 4
        },
        "payDesc": {
          "type": "string",
          "id": 5
        },
        "payAccount": {
          "type": "string",
          "id": 6
        },
        "realName": {
          "type": "string",
          "id": 7
        },
        "status": {
          "type": "int32",
          "id": 8
        },
        "orderId": {
          "type": "int64",
          "id": 9
        },
        "orderType": {
          "type": "int64",
          "id": 10
        },
        "userId": {
          "type": "int64",
          "id": 11
        },
        "orderInfo": {
          "type": "OrderInfo",
          "id": 12
        },
        "tradeInfoList": {
          "rule": "repeated",
          "type": "TradeInfo",
          "id": 13
        }
      }
    },
    "TradeReply": {
      "fields": {
        "tradeInfo": {
          "type": "TradeInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "UserBalanceLog": {
      "fields": {
        "logId": {
          "type": "int64",
          "id": 1
        },
        "moneyBalance": {
          "type": "string",
          "id": 2
        },
        "lockedMoneyBalance": {
          "type": "string",
          "id": 3
        },
        "aMDepositBalance": {
          "type": "string",
          "id": 4
        },
        "moneyBalanceOrigin": {
          "type": "string",
          "id": 5
        },
        "lockedMoneyBalanceOrigin": {
          "type": "string",
          "id": 6
        },
        "aMDepositBalanceOrigin": {
          "type": "string",
          "id": 7
        },
        "logType": {
          "type": "int32",
          "id": 8
        },
        "userId": {
          "type": "int64",
          "id": 9
        },
        "toUserId": {
          "type": "int64",
          "id": 10
        },
        "logDetail": {
          "type": "string",
          "id": 11
        },
        "status": {
          "type": "int32",
          "id": 12
        },
        "logTime": {
          "type": "int64",
          "id": 13
        },
        "userBalanceLog": {
          "rule": "repeated",
          "type": "UserBalanceLog",
          "id": 14
        }
      }
    },
    "UserBalanceLogReply": {
      "fields": {
        "userBalanceLog": {
          "type": "UserBalanceLog",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "UserReply": {
      "fields": {
        "userInfo": {
          "type": "UserInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "VideoUpload": {
      "fields": {
        "videoBytes": {
          "type": "bytes",
          "id": 1
        },
        "videoName": {
          "type": "string",
          "id": 2
        },
        "suffix": {
          "type": "string",
          "id": 3
        },
        "SpareParameter": {
          "keyType": "string",
          "type": "string",
          "id": 4
        },
        "video": {
          "rule": "repeated",
          "type": "VideoUpload",
          "id": 5
        }
      }
    },
    "VideoInfo": {
      "fields": {
        "videoId": {
          "type": "int64",
          "id": 1
        },
        "fileTitle": {
          "type": "string",
          "id": 2
        },
        "fileName": {
          "type": "string",
          "id": 3
        },
        "serverId": {
          "type": "int32",
          "id": 4
        },
        "uploadTime": {
          "type": "int64",
          "id": 5
        },
        "videoType": {
          "type": "int32",
          "id": 6
        },
        "userId": {
          "type": "int32",
          "id": 7
        },
        "picId": {
          "type": "int64",
          "id": 8
        },
        "watchNumber": {
          "type": "int32",
          "id": 9
        },
        "videoPath": {
          "type": "string",
          "id": 10
        },
        "SpareParameter": {
          "keyType": "string",
          "type": "string",
          "id": 11
        },
        "videoInfoList": {
          "rule": "repeated",
          "type": "VideoInfo",
          "id": 12
        }
      }
    },
    "VideoRequest": {
      "fields": {
        "video": {
          "type": "VideoUpload",
          "id": 1
        },
        "baseRequest": {
          "type": "BaseRequest",
          "id": 2
        }
      }
    },
    "WapVerify": {
      "fields": {
        "wapId": {
          "type": "int64",
          "id": 1
        },
        "wapName": {
          "type": "string",
          "id": 2
        },
        "wapClassify": {
          "type": "string",
          "id": 3
        },
        "wapFans": {
          "type": "int32",
          "id": 4
        },
        "wapDesc": {
          "type": "string",
          "id": 5
        },
        "contactName": {
          "type": "string",
          "id": 6
        },
        "contactPhone": {
          "type": "string",
          "id": 7
        },
        "wapStatus": {
          "type": "int32",
          "id": 8
        },
        "verifyId": {
          "type": "int64",
          "id": 9
        },
        "verifyName": {
          "type": "string",
          "id": 10
        },
        "verifyDesc": {
          "type": "string",
          "id": 11
        },
        "spaceId": {
          "type": "int64",
          "id": 12
        },
        "picId": {
          "type": "int64",
          "id": 13
        },
        "spaceNum": {
          "type": "string",
          "id": 14
        },
        "commitTime": {
          "type": "int64",
          "id": 15
        },
        "verifyTime": {
          "type": "int64",
          "id": 16
        },
        "wapVerifys": {
          "rule": "repeated",
          "type": "WapVerify",
          "id": 17
        },
        "wapUrl": {
          "type": "string",
          "id": 18
        }
      }
    },
    "WeiXinUserInfo": {
      "fields": {
        "userId": {
          "type": "int64",
          "id": 1
        },
        "token": {
          "type": "string",
          "id": 2
        },
        "liveList": {
          "type": "string",
          "id": 3
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 4
        }
      }
    },
    "BankCard": {
      "fields": {
        "bankCardId": {
          "type": "int32",
          "id": 1
        },
        "bankName": {
          "type": "string",
          "id": 2
        },
        "status": {
          "type": "string",
          "id": 3
        },
        "sortNum": {
          "type": "int32",
          "id": 4
        },
        "bankIcon": {
          "type": "int64",
          "id": 5
        },
        "bankPic": {
          "type": "int64",
          "id": 6
        },
        "bankCardList": {
          "rule": "repeated",
          "type": "BankCard",
          "id": 7
        },
        "iconPicture": {
          "type": "PictureInfo",
          "id": 8
        },
        "picture": {
          "type": "PictureInfo",
          "id": 9
        }
      }
    },
    "UserBankCard": {
      "fields": {
        "cardId": {
          "type": "int64",
          "id": 1
        },
        "bankCardName": {
          "type": "string",
          "id": 2
        },
        "bankCardNo": {
          "type": "string",
          "id": 3
        },
        "bankName": {
          "type": "string",
          "id": 4
        },
        "userId": {
          "type": "int64",
          "id": 5
        },
        "bankCardBranch": {
          "type": "string",
          "id": 6
        },
        "phoneNo": {
          "type": "string",
          "id": 7
        },
        "bankCardId": {
          "type": "int32",
          "id": 8
        },
        "status": {
          "type": "int32",
          "id": 9
        },
        "userBankCardList": {
          "rule": "repeated",
          "type": "UserBankCard",
          "id": 10
        },
        "bankCard": {
          "type": "BankCard",
          "id": 11
        }
      }
    },
    "BaseReply": {
      "fields": {
        "Code": {
          "type": "int32",
          "id": 1
        },
        "Message": {
          "type": "string",
          "id": 2
        },
        "spareParameter": {
          "keyType": "string",
          "type": "string",
          "id": 3
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 4
        },
        "bannerInfo": {
          "type": "BannerInfo",
          "id": 5
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 6
        },
        "videoInfo": {
          "type": "VideoInfo",
          "id": 7
        },
        "areaInfo": {
          "type": "AreaInfo",
          "id": 8
        },
        "spaceInfo": {
          "type": "SpaceInfo",
          "id": 9
        },
        "addressInfo": {
          "type": "AddressInfo",
          "id": 10
        },
        "spaceColumn": {
          "type": "SpaceColumn",
          "id": 11
        },
        "noticeReply": {
          "type": "NoticeReply",
          "id": 12
        },
        "spaceVerify": {
          "type": "SpaceVerify",
          "id": 13
        },
        "cameraReply": {
          "type": "CameraReply",
          "id": 14
        },
        "moneyInfo": {
          "type": "MoneyInfo",
          "id": 15
        },
        "wapVerify": {
          "type": "WapVerify",
          "id": 16
        },
        "spaceBanner": {
          "type": "SpaceBanner",
          "id": 17
        },
        "orderInfo": {
          "type": "OrderInfo",
          "id": 18
        },
        "orderReply": {
          "type": "OrderReply",
          "id": 19
        },
        "productInfo": {
          "type": "ProductInfo",
          "id": 20
        },
        "productReply": {
          "type": "ProductReply",
          "id": 21
        },
        "tradeInfo": {
          "type": "TradeInfo",
          "id": 22
        },
        "tradeReply": {
          "type": "TradeReply",
          "id": 23
        },
        "userReply": {
          "type": "UserReply",
          "id": 24
        },
        "productCategory": {
          "type": "ProductCategory",
          "id": 25
        },
        "spaceReply": {
          "type": "SpaceReply",
          "id": 26
        },
        "cartReply": {
          "type": "CartReply",
          "id": 27
        },
        "spaceClassify": {
          "type": "SpaceClassify",
          "id": 28
        },
        "spaceProductRecom": {
          "type": "SpaceProductRecom",
          "id": 29
        },
        "liveVideoReply": {
          "type": "LiveVideoReply",
          "id": 30
        },
        "liveVideo": {
          "type": "LiveVideo",
          "id": 31
        },
        "liveInfo": {
          "type": "LiveInfo",
          "id": 32
        },
        "commentReply": {
          "type": "CommentReply",
          "id": 33
        },
        "redBeanModel": {
          "type": "RedBeanModel",
          "id": 34
        },
        "appVersion": {
          "type": "AppVersion",
          "id": 35
        },
        "activiteInfo": {
          "type": "ActiviteInfo",
          "id": 36
        },
        "protocOrderRefund": {
          "type": "OrderRefund",
          "id": 37
        },
        "cashReply": {
          "type": "CashReply",
          "id": 38
        },
        "cashInfo": {
          "type": "CashInfo",
          "id": 39
        },
        "expressCompany": {
          "type": "ExpressCompany",
          "id": 40
        },
        "noticeInfoReply": {
          "type": "NoticeInfoReply",
          "id": 41
        },
        "hmdayClassify": {
          "type": "HMDayClassify",
          "id": 42
        },
        "helpQuestion": {
          "type": "HelpQuestions",
          "id": 43
        },
        "agent": {
          "type": "Agent",
          "id": 44
        },
        "UserBalanceLog": {
          "type": "UserBalanceLog",
          "id": 45
        },
        "UserBalanceLogReply": {
          "type": "UserBalanceLogReply",
          "id": 46
        },
        "suHomeSelectionSpaceReply": {
          "type": "SUHomeSelectionSpaceReply",
          "id": 47
        },
        "suHomeSelectionSpace": {
          "type": "SUHomeSelectionSpace",
          "id": 48
        },
        "suHomeSelection": {
          "type": "SUHomeSelection",
          "id": 49
        },
        "userBankCard": {
          "type": "UserBankCard",
          "id": 50
        },
        "bankCard": {
          "type": "BankCard",
          "id": 51
        },
        "orderRefundReply": {
          "type": "OrderRefundReply",
          "id": 52
        },
        "strList": {
          "rule": "repeated",
          "type": "string",
          "id": 53
        },
        "depositRefund": {
          "type": "DepositRefund",
          "id": 54
        },
        "draftUser": {
          "type": "DraftUser",
          "id": 56
        },
        "draftUserReply": {
          "type": "DraftUserReply",
          "id": 57
        },
        "eventInfo": {
          "type": "EventInfo",
          "id": 58
        },
        "articleInfo": {
          "type": "ArticleInfo",
          "id": 59
        },
        "articleInfoReply": {
          "type": "ArticleInfoReply",
          "id": 60
        },
        "articleCommentReply": {
          "type": "ArticleCommentReply",
          "id": 61
        },
        "keywordsShielding": {
          "type": "KeywordsShielding",
          "id": 62
        },
        "customerService": {
          "type": "CustomerService",
          "id": 63
        },
        "vipModel": {
          "type": "VipModel",
          "id": 64
        },
        "flowOrder": {
          "type": "FlowOrder",
          "id": 65
        },
        "flowModel": {
          "type": "FlowModel",
          "id": 66
        },
        "flowOrderReply": {
          "type": "FlowOrderReply",
          "id": 67
        },
        "DSPOrderInfo": {
          "type": "DSPOrderInfo",
          "id": 68
        },
        "DSPOrderReply": {
          "type": "DSPOrderReply",
          "id": 69
        },
        "productFreightReply": {
          "type": "ProductFreightReply",
          "id": 70
        },
        "skuInfo": {
          "type": "SkuInfo",
          "id": 71
        },
        "recomProductClassify": {
          "type": "HMRecomProductClassify",
          "id": 72
        },
        "productFreight": {
          "type": "ProductFreight",
          "id": 73
        },
        "putPolicyInfo": {
          "type": "PutPolicyInfo",
          "id": 74
        },
        "productComment": {
          "type": "ProductComment",
          "id": 75
        },
        "msMessage": {
          "type": "MsMessage",
          "id": 76
        },
        "vrTopic": {
          "type": "VRTopic",
          "id": 77
        },
        "vrTopicSpace": {
          "type": "VRTopicSpace",
          "id": 78
        },
        "vrTopicSpaceReply": {
          "type": "VRTopicSpaceReply",
          "id": 79
        },
        "vipModelV1": {
          "type": "VipModelV1",
          "id": 80
        },
        "noticeInfo": {
          "type": "NoticeInfo",
          "id": 82
        },
        "exterFaceOrder": {
          "type": "ExterFaceOrder",
          "id": 83
        },
        "spaceTaskReward": {
          "type": "SpaceTaskReward",
          "id": 84
        },
        "spaceTasks": {
          "type": "SpaceTasks",
          "id": 85
        },
        "spaceTaskReply": {
          "type": "SpaceTaskReply",
          "id": 86
        },
        "userInvitationReply": {
          "type": "UserInvitationReply",
          "id": 87
        },
        "invitationVipRewardReply": {
          "type": "InvitationVipRewardReply",
          "id": 88
        },
        "userInvitation": {
          "type": "UserInvitation",
          "id": 89
        },
        "invitationVipReward": {
          "type": "InvitationVipReward",
          "id": 90
        },
        "userInvitationCenter": {
          "type": "UserInvitationCenter",
          "id": 91
        },
        "audioClassify": {
          "type": "AudioClassify",
          "id": 92
        },
        "audioInfo": {
          "type": "AudioInfo",
          "id": 93
        },
        "grActivityGroup": {
          "type": "GRActivityGroup",
          "id": 94
        },
        "grActivityPublish": {
          "type": "GRActivityPublish",
          "id": 95
        },
        "grActivityUsers": {
          "type": "GRActivityUsers",
          "id": 96
        },
        "grActivityGroupReply": {
          "type": "GRActivityGroupReply",
          "id": 97
        },
        "grSKUInventory": {
          "type": "GRSKUInventory",
          "id": 98
        },
        "couponInfo": {
          "type": "CouponInfo",
          "id": 99
        },
        "userCoupon": {
          "type": "UserCoupon",
          "id": 100
        },
        "grActivityPublishReply": {
          "type": "GRActivityPublishReply",
          "id": 101
        }
      }
    },
    "UserCoupon": {
      "fields": {
        "userId": {
          "type": "int64",
          "id": 2
        },
        "couponId": {
          "type": "int64",
          "id": 3
        },
        "applyTime": {
          "type": "int64",
          "id": 4
        },
        "receiveTime": {
          "type": "int64",
          "id": 5
        },
        "usedStatus": {
          "type": "int32",
          "id": 6
        },
        "orderId": {
          "type": "int64",
          "id": 7
        },
        "userCoupons": {
          "rule": "repeated",
          "type": "UserCoupon",
          "id": 8
        },
        "couponInfo": {
          "type": "CouponInfo",
          "id": 9
        }
      }
    },
    "GRActivityPublishReply": {
      "fields": {
        "grActivityPublish": {
          "type": "GRActivityPublish",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "GRActivityGroupReply": {
      "fields": {
        "grActivityGroup": {
          "type": "GRActivityGroup",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "CouponInfo": {
      "fields": {
        "couponId": {
          "type": "int64",
          "id": 1
        },
        "couponName": {
          "type": "string",
          "id": 2
        },
        "couponType": {
          "type": "int32",
          "id": 3
        },
        "couponApplyType": {
          "type": "int32",
          "id": 4
        },
        "couponQuantity": {
          "type": "int32",
          "id": 5
        },
        "couponStatus": {
          "type": "int32",
          "id": 6
        },
        "couponDiscountRate": {
          "type": "int32",
          "id": 7
        },
        "couponFilled": {
          "type": "double",
          "id": 8
        },
        "couponDiscountAmount": {
          "type": "double",
          "id": 9
        },
        "receiveUserLimit": {
          "type": "int32",
          "id": 10
        },
        "addTime": {
          "type": "int64",
          "id": 11
        },
        "receiveStartTime": {
          "type": "int64",
          "id": 12
        },
        "receiveEndTime": {
          "type": "int64",
          "id": 13
        },
        "applyStartTime": {
          "type": "int64",
          "id": 14
        },
        "applyEndTime": {
          "type": "int64",
          "id": 15
        },
        "receiveUserAmountLimit": {
          "type": "double",
          "id": 16
        },
        "spaceId": {
          "type": "int64",
          "id": 17
        },
        "couponInfos": {
          "rule": "repeated",
          "type": "CouponInfo",
          "id": 18
        },
        "isReceive": {
          "type": "bool",
          "id": 19
        },
        "available": {
          "type": "bool",
          "id": 20
        },
        "couponReceiveQuantity": {
          "type": "int32",
          "id": 21
        },
        "applyReceiveQuantity": {
          "type": "int32",
          "id": 22
        },
        "spaceName": {
          "type": "string",
          "id": 23
        },
        "headPicUrl": {
          "type": "string",
          "id": 24
        }
      }
    },
    "HMDayClassifyTitle": {
      "fields": {
        "themeTitle": {
          "type": "string",
          "id": 1
        },
        "themeColor": {
          "type": "string",
          "id": 2
        },
        "iconPictureInfo": {
          "type": "PictureInfo",
          "id": 3
        },
        "iconPicId": {
          "type": "int64",
          "id": 4
        }
      }
    },
    "ExterFaceOrder": {
      "fields": {
        "iD": {
          "type": "int64",
          "id": 1
        },
        "ecName": {
          "type": "string",
          "id": 2
        },
        "exterfaceCode": {
          "type": "string",
          "id": 3
        },
        "customername": {
          "type": "string",
          "id": 4
        },
        "orderNumber": {
          "type": "string",
          "id": 5
        },
        "status": {
          "type": "int32",
          "id": 6
        },
        "meshPoint": {
          "type": "string",
          "id": 7
        },
        "template": {
          "type": "string",
          "id": 8
        },
        "spaceid": {
          "type": "int64",
          "id": 9
        },
        "createTime": {
          "type": "int64",
          "id": 10
        },
        "exterFaceOrderList": {
          "rule": "repeated",
          "type": "ExterFaceOrder",
          "id": 11
        }
      }
    },
    "SpaceTaskReply": {
      "fields": {
        "isVip": {
          "type": "bool",
          "id": 1
        },
        "spaceTaskReward": {
          "rule": "repeated",
          "type": "SpaceTaskReward",
          "id": 2
        }
      }
    },
    "UserInvitationReply": {
      "fields": {
        "userInvitation": {
          "type": "UserInvitation",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "UserInvitation": {
      "fields": {
        "invitationId": {
          "type": "int64",
          "id": 1
        },
        "topUserId": {
          "type": "int64",
          "id": 2
        },
        "userId": {
          "type": "int64",
          "id": 3
        },
        "toUserId": {
          "type": "int64",
          "id": 4
        },
        "addTime": {
          "type": "int64",
          "id": 5
        },
        "invitationSource": {
          "type": "int32",
          "id": 6
        },
        "userInvitations": {
          "rule": "repeated",
          "type": "UserInvitation",
          "id": 7
        },
        "toUserInfo": {
          "type": "UserInfo",
          "id": 8
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 9
        },
        "topUserInfo": {
          "type": "UserInfo",
          "id": 10
        },
        "invitationCode": {
          "type": "string",
          "id": 11
        }
      }
    },
    "UserInvitationCenter": {
      "fields": {
        "userName": {
          "type": "string",
          "id": 1
        },
        "headUrl": {
          "type": "string",
          "id": 2
        },
        "invitationCode": {
          "type": "string",
          "id": 3
        },
        "teamOverview": {
          "type": "int32",
          "id": 4
        },
        "ownProfit": {
          "type": "double",
          "id": 5
        },
        "spaceStatus": {
          "type": "int32",
          "id": 6
        },
        "openSpace": {
          "type": "bool",
          "id": 7
        }
      }
    },
    "SpaceTasks": {
      "fields": {
        "taskId": {
          "type": "int32",
          "id": 1
        },
        "taskName": {
          "type": "string",
          "id": 2
        },
        "taskDesc": {
          "type": "string",
          "id": 3
        },
        "taskType": {
          "type": "int32",
          "id": 4
        },
        "taskChoice": {
          "type": "int32",
          "id": 5
        },
        "taskRequire": {
          "type": "string",
          "id": 6
        },
        "createTime": {
          "type": "int64",
          "id": 7
        },
        "updateTime": {
          "type": "int64",
          "id": 8
        },
        "deleted": {
          "type": "int32",
          "id": 9
        },
        "taskCompleted": {
          "type": "int32",
          "id": 10
        },
        "taskSpeed": {
          "type": "string",
          "id": 11
        },
        "spaceTasks": {
          "rule": "repeated",
          "type": "SpaceTasks",
          "id": 12
        },
        "taskImage": {
          "type": "string",
          "id": 13
        },
        "taskFinishimage": {
          "type": "string",
          "id": 14
        },
        "taskImagePicid": {
          "type": "string",
          "id": 15
        },
        "taskFinishimagePicid": {
          "type": "string",
          "id": 16
        }
      }
    },
    "SpaceTaskReward": {
      "fields": {
        "spaceId": {
          "type": "int64",
          "id": 1
        },
        "taskTypeId": {
          "type": "int32",
          "id": 2
        },
        "rewardStatus": {
          "type": "int32",
          "id": 3
        },
        "completed": {
          "type": "int32",
          "id": 4
        },
        "startTime": {
          "type": "int64",
          "id": 5
        },
        "endTime": {
          "type": "int64",
          "id": 6
        },
        "taskTypeReward": {
          "type": "string",
          "id": 7
        },
        "spaceTasks": {
          "type": "SpaceTasks",
          "id": 8
        }
      }
    },
    "InvitationVipReward": {
      "fields": {
        "rewardId": {
          "type": "int64",
          "id": 1
        },
        "addTime": {
          "type": "int64",
          "id": 2
        },
        "userId": {
          "type": "int64",
          "id": 3
        },
        "rewardRedbean": {
          "type": "double",
          "id": 4
        },
        "rewardStatus": {
          "type": "int32",
          "id": 5
        },
        "currrentVipType": {
          "type": "int32",
          "id": 6
        },
        "fromUserId": {
          "type": "int64",
          "id": 7
        },
        "fromVipType": {
          "type": "int32",
          "id": 8
        },
        "payId": {
          "type": "string",
          "id": 9
        },
        "orderId": {
          "type": "int64",
          "id": 10
        },
        "rewardReason": {
          "type": "string",
          "id": 11
        },
        "topUserId": {
          "type": "int64",
          "id": 12
        },
        "topRewardRedbean": {
          "type": "double",
          "id": 13
        },
        "topRewardStatus": {
          "type": "int32",
          "id": 14
        },
        "topCurrrentVipType": {
          "type": "int32",
          "id": 15
        },
        "invitationVipRewards": {
          "rule": "repeated",
          "type": "InvitationVipReward",
          "id": 16
        },
        "toUserInfo": {
          "type": "UserInfo",
          "id": 17
        },
        "invitationType": {
          "type": "int32",
          "id": 18
        }
      }
    },
    "MsMessage": {
      "fields": {
        "messageId": {
          "type": "int64",
          "id": 1
        },
        "messageNumber": {
          "type": "string",
          "id": 2
        },
        "messageTitle": {
          "type": "string",
          "id": 3
        },
        "messageContent": {
          "type": "string",
          "id": 4
        },
        "messageSource": {
          "type": "string",
          "id": 5
        },
        "messageImage": {
          "type": "string",
          "id": 6
        },
        "messageType": {
          "type": "int32",
          "id": 7
        },
        "messageTypeId": {
          "type": "int64",
          "id": 8
        },
        "messageUrl": {
          "type": "string",
          "id": 9
        },
        "fromUserId": {
          "type": "int64",
          "id": 10
        },
        "toUserId": {
          "type": "int64",
          "id": 11
        },
        "isRead": {
          "type": "int32",
          "id": 12
        },
        "isDel": {
          "type": "int32",
          "id": 13
        },
        "isPush": {
          "type": "int32",
          "id": 14
        },
        "createTime": {
          "type": "int64",
          "id": 15
        },
        "updateTime": {
          "type": "int64",
          "id": 16
        },
        "pushTime": {
          "type": "int64",
          "id": 17
        },
        "reportCount": {
          "type": "int32",
          "id": 18
        },
        "msMessagelist": {
          "rule": "repeated",
          "type": "MsMessage",
          "id": 19
        }
      }
    },
    "InvitationVipRewardAgentModel": {
      "fields": {
        "rewardVipType": {
          "type": "int32",
          "id": 1
        },
        "rewardAmount": {
          "type": "double",
          "id": 2
        },
        "invitationVipRewardAgentModels": {
          "rule": "repeated",
          "type": "InvitationVipRewardAgentModel",
          "id": 3
        }
      }
    },
    "InvitationVipRewardModel": {
      "fields": {
        "vipType": {
          "type": "int32",
          "id": 1
        },
        "rewardType": {
          "type": "int32",
          "id": 2
        },
        "rewardVipType": {
          "type": "int32",
          "id": 3
        },
        "rewardRedbean": {
          "type": "double",
          "id": 4
        },
        "invitationVipRewardModels": {
          "rule": "repeated",
          "type": "InvitationVipRewardModel",
          "id": 5
        }
      }
    },
    "InvitationVipRewardReply": {
      "fields": {
        "invitationVipReward": {
          "type": "InvitationVipReward",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        },
        "ownProfit": {
          "type": "double",
          "id": 3
        },
        "todayInvitations": {
          "type": "int32",
          "id": 4
        },
        "totalInvitations": {
          "type": "int32",
          "id": 5
        }
      }
    },
    "VipModelV1": {
      "fields": {
        "modleId": {
          "type": "int32",
          "id": 1
        },
        "modelName": {
          "type": "string",
          "id": 2
        },
        "modelOriginalPrice": {
          "type": "double",
          "id": 3
        },
        "modelPrice": {
          "type": "double",
          "id": 4
        },
        "vipUrl": {
          "type": "string",
          "id": 5
        },
        "vipDesc": {
          "type": "string",
          "id": 6
        },
        "vipStatus": {
          "type": "int32",
          "id": 7
        },
        "vipEndTime": {
          "type": "int64",
          "id": 8
        },
        "modelDiscountPrice": {
          "type": "double",
          "id": 9
        },
        "vipModel": {
          "rule": "repeated",
          "type": "VipModelV1",
          "id": 10
        },
        "agreementUrl": {
          "type": "string",
          "id": 11
        },
        "isExpire": {
          "type": "int32",
          "id": 12
        }
      }
    },
    "PutPolicyInfo": {
      "fields": {
        "objectId": {
          "type": "int64",
          "id": 1
        },
        "putPolicy": {
          "type": "string",
          "id": 2
        },
        "uploadUrl": {
          "type": "string",
          "id": 3
        }
      }
    },
    "HMRecomProductClassify": {
      "fields": {
        "classifyId": {
          "type": "int32",
          "id": 1
        },
        "classifyName": {
          "type": "string",
          "id": 2
        },
        "classifyTitle": {
          "type": "string",
          "id": 3
        },
        "editTime": {
          "type": "int64",
          "id": 4
        },
        "picId": {
          "type": "int64",
          "id": 5
        },
        "sortNum": {
          "type": "int32",
          "id": 6
        },
        "status": {
          "type": "int32",
          "id": 7
        },
        "recomProductClassifyList": {
          "rule": "repeated",
          "type": "HMRecomProductClassify",
          "id": 8
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 9
        },
        "onLineCount": {
          "type": "int64",
          "id": 10
        },
        "iconPicId": {
          "type": "int64",
          "id": 11
        },
        "iconPictureInfo": {
          "type": "PictureInfo",
          "id": 12
        },
        "productInfo": {
          "type": "ProductInfo",
          "id": 13
        },
        "themeColor": {
          "type": "string",
          "id": 14
        },
        "top": {
          "type": "int32",
          "id": 15
        }
      }
    },
    "ProductFreightReply": {
      "fields": {
        "productFreight": {
          "type": "ProductFreight",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "DSPOrderReply": {
      "fields": {
        "DSPOrderInfo": {
          "type": "DSPOrderInfo",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "DSPOrderInfo": {
      "fields": {
        "orderId": {
          "type": "int64",
          "id": 1
        },
        "orderNo": {
          "type": "string",
          "id": 2
        },
        "orderTime": {
          "type": "int64",
          "id": 3
        },
        "orderStatus": {
          "type": "int32",
          "id": 4
        },
        "spaceId": {
          "type": "int64",
          "id": 5
        },
        "userId": {
          "type": "int64",
          "id": 6
        },
        "orderAmount": {
          "type": "double",
          "id": 7
        },
        "platformAmount": {
          "type": "double",
          "id": 8
        },
        "orderDesc": {
          "type": "string",
          "id": 9
        },
        "dspStatus": {
          "type": "int32",
          "id": 10
        },
        "channelOrderId": {
          "type": "string",
          "id": 11
        },
        "payId": {
          "type": "string",
          "id": 12
        },
        "payType": {
          "type": "int32",
          "id": 13
        },
        "payTime": {
          "type": "int64",
          "id": 14
        },
        "areaLable": {
          "type": "string",
          "id": 15
        },
        "areaValue": {
          "type": "string",
          "id": 16
        },
        "landingPagePicId": {
          "type": "int64",
          "id": 17
        },
        "landingPagePicUrl": {
          "type": "string",
          "id": 18
        },
        "everydayPv": {
          "type": "int32",
          "id": 19
        },
        "startDate": {
          "type": "int64",
          "id": 20
        },
        "endDate": {
          "type": "int64",
          "id": 21
        },
        "allDayOrNot": {
          "type": "int32",
          "id": 22
        },
        "loopAtt": {
          "type": "string",
          "id": 23
        },
        "uvCount": {
          "type": "int64",
          "id": 24
        },
        "totalCount": {
          "type": "int64",
          "id": 25
        },
        "cvCount": {
          "type": "int64",
          "id": 26
        },
        "allTime": {
          "type": "int32",
          "id": 27
        },
        "channelType": {
          "type": "int32",
          "id": 28
        },
        "DSPOrderInfoList": {
          "rule": "repeated",
          "type": "DSPOrderInfo",
          "id": 29
        },
        "landingPagePictureInfo": {
          "type": "PictureInfo",
          "id": 30
        },
        "dspOrderRefundRecord": {
          "type": "DSPOrderRefundRecord",
          "id": 31
        },
        "stuffText": {
          "type": "string",
          "id": 32
        }
      }
    },
    "DSPOrderRefundRecord": {
      "fields": {
        "refundId": {
          "type": "int64",
          "id": 1
        },
        "refundNum": {
          "type": "string",
          "id": 2
        },
        "orderId": {
          "type": "int64",
          "id": 3
        },
        "refundStatus": {
          "type": "int32",
          "id": 4
        },
        "refundDesc": {
          "type": "string",
          "id": 5
        },
        "refundTime": {
          "type": "int64",
          "id": 6
        },
        "dspDesc": {
          "type": "string",
          "id": 7
        },
        "dspOrderRefundRecord": {
          "rule": "repeated",
          "type": "DSPOrderRefundRecord",
          "id": 8
        }
      }
    },
    "FlowOrderReply": {
      "fields": {
        "flowOrder": {
          "type": "FlowOrder",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "DataVersion": {
      "fields": {
        "dataId": {
          "type": "int32",
          "id": 1
        },
        "dataName": {
          "type": "string",
          "id": 2
        },
        "dataVersion": {
          "type": "int32",
          "id": 3
        },
        "dataType": {
          "type": "string",
          "id": 4
        },
        "modifyTime": {
          "type": "int64",
          "id": 5
        },
        "dataVersions": {
          "rule": "repeated",
          "type": "DataVersion",
          "id": 6
        }
      }
    },
    "VipModel": {
      "fields": {
        "vipType": {
          "type": "int32",
          "id": 1
        },
        "htmlUrl": {
          "type": "string",
          "id": 2
        },
        "agreementDesc": {
          "type": "string",
          "id": 3
        },
        "agreementUrl": {
          "type": "string",
          "id": 4
        },
        "agreementTitle": {
          "type": "string",
          "id": 5
        },
        "title": {
          "type": "string",
          "id": 6
        },
        "vipPrice": {
          "type": "double",
          "id": 7
        },
        "vipModel": {
          "rule": "repeated",
          "type": "VipModel",
          "id": 8
        },
        "isReturn": {
          "type": "bool",
          "id": 9
        },
        "vipEndTime": {
          "type": "int64",
          "id": 10
        },
        "description": {
          "type": "string",
          "id": 11
        },
        "vipStatus": {
          "type": "int32",
          "id": 12
        }
      }
    },
    "KeywordsShielding": {
      "fields": {
        "shieldingId": {
          "type": "int32",
          "id": 1
        },
        "shieldingValue": {
          "type": "string",
          "id": 2
        },
        "modifyTime": {
          "type": "int64",
          "id": 3
        },
        "status": {
          "type": "int32",
          "id": 4
        },
        "keywordsShielding": {
          "rule": "repeated",
          "type": "KeywordsShielding",
          "id": 5
        }
      }
    },
    "DraftProductReply": {
      "fields": {
        "draftProduct": {
          "type": "DraftProduct",
          "id": 1
        },
        "pageInfo": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "DraftProduct": {
      "fields": {
        "productId": {
          "type": "int64",
          "id": 1
        },
        "userId": {
          "type": "int64",
          "id": 2
        },
        "spaceId": {
          "type": "int64",
          "id": 3
        },
        "score": {
          "type": "int32",
          "id": 4
        },
        "eventPrice": {
          "type": "double",
          "id": 5
        },
        "eventId": {
          "type": "int64",
          "id": 6
        },
        "addTime": {
          "type": "int64",
          "id": 7
        },
        "editTime": {
          "type": "int64",
          "id": 8
        },
        "draftProductList": {
          "rule": "repeated",
          "type": "DraftProduct",
          "id": 9
        },
        "productInfo": {
          "type": "ProductInfo",
          "id": 10
        }
      }
    },
    "CustomerService": {
      "fields": {
        "serviceId": {
          "type": "int32",
          "id": 1
        },
        "serviceName": {
          "type": "string",
          "id": 2
        },
        "picId": {
          "type": "int64",
          "id": 3
        },
        "servicePhone": {
          "type": "string",
          "id": 4
        },
        "status": {
          "type": "int32",
          "id": 5
        },
        "customerService": {
          "rule": "repeated",
          "type": "CustomerService",
          "id": 6
        },
        "pictureInfo": {
          "type": "PictureInfo",
          "id": 7
        }
      }
    },
    "FlowOrder": {
      "fields": {
        "orderId": {
          "type": "int64",
          "id": 1
        },
        "orderNo": {
          "type": "string",
          "id": 2
        },
        "orderTime": {
          "type": "int64",
          "id": 3
        },
        "orderStatus": {
          "type": "int32",
          "id": 4
        },
        "spaceId": {
          "type": "int64",
          "id": 5
        },
        "userId": {
          "type": "int64",
          "id": 6
        },
        "orderAmount": {
          "type": "double",
          "id": 7
        },
        "platformAmount": {
          "type": "double",
          "id": 8
        },
        "orderDesc": {
          "type": "string",
          "id": 9
        },
        "modelDesc": {
          "type": "string",
          "id": 10
        },
        "rechargeStatus": {
          "type": "int32",
          "id": 11
        },
        "channelOrderId": {
          "type": "string",
          "id": 12
        },
        "phoneNo": {
          "type": "string",
          "id": 13
        },
        "prodId": {
          "type": "string",
          "id": 14
        },
        "payId": {
          "type": "string",
          "id": 15
        },
        "rechargeTime": {
          "type": "int64",
          "id": 16
        },
        "payType": {
          "type": "int32",
          "id": 17
        },
        "platformTime": {
          "type": "int64",
          "id": 18
        },
        "operatorType": {
          "type": "int32",
          "id": 19
        },
        "payTime": {
          "type": "int64",
          "id": 20
        },
        "flowOrderList": {
          "rule": "repeated",
          "type": "FlowOrder",
          "id": 21
        },
        "flowOrderRefundRecord": {
          "type": "FlowOrderRefundRecord",
          "id": 22
        }
      }
    },
    "FlowOrderPay": {
      "fields": {
        "payId": {
          "type": "string",
          "id": 1
        },
        "orderId": {
          "type": "int64",
          "id": 2
        },
        "payMoney": {
          "type": "double",
          "id": 3
        },
        "payTime": {
          "type": "int64",
          "id": 4
        },
        "payType": {
          "type": "int32",
          "id": 5
        },
        "payDesc": {
          "type": "string",
          "id": 6
        },
        "payAccount": {
          "type": "string",
          "id": 7
        },
        "status": {
          "type": "int32",
          "id": 8
        },
        "userId": {
          "type": "int64",
          "id": 9
        },
        "spaceId": {
          "type": "int64",
          "id": 10
        },
        "tradeNo": {
          "type": "string",
          "id": 11
        },
        "flowOrderPayList": {
          "rule": "repeated",
          "type": "FlowOrderPay",
          "id": 12
        }
      }
    },
    "FlowOrderRefundRecord": {
      "fields": {
        "refundId": {
          "type": "int64",
          "id": 1
        },
        "refundNum": {
          "type": "string",
          "id": 2
        },
        "orderId": {
          "type": "int64",
          "id": 3
        },
        "refundStatus": {
          "type": "int32",
          "id": 4
        },
        "refundDesc": {
          "type": "string",
          "id": 5
        },
        "refundTime": {
          "type": "int64",
          "id": 6
        },
        "rechargeDesc": {
          "type": "string",
          "id": 7
        },
        "flowOrderRefundRecordList": {
          "rule": "repeated",
          "type": "FlowOrderRefundRecord",
          "id": 8
        }
      }
    },
    "FlowModel": {
      "fields": {
        "modelId": {
          "type": "int32",
          "id": 1
        },
        "modelDesc": {
          "type": "string",
          "id": 2
        },
        "modelPrice": {
          "type": "double",
          "id": 3
        },
        "editTime": {
          "type": "int64",
          "id": 4
        },
        "discountRate": {
          "type": "double",
          "id": 5
        },
        "isDiscount": {
          "type": "int32",
          "id": 6
        },
        "modelSort": {
          "type": "int32",
          "id": 7
        },
        "modelStatus": {
          "type": "int32",
          "id": 8
        },
        "prodId": {
          "type": "string",
          "id": 9
        },
        "operatorType": {
          "type": "int32",
          "id": 10
        },
        "originaPrice": {
          "type": "double",
          "id": 11
        },
        "flowModelList": {
          "rule": "repeated",
          "type": "FlowModel",
          "id": 12
        }
      }
    },
    "DraftUserReply": {
      "fields": {
        "draftUser": {
          "type": "DraftUser",
          "id": 1
        },
        "page": {
          "type": "PageInfo",
          "id": 2
        }
      }
    },
    "DraftUser": {
      "fields": {
        "userId": {
          "type": "int64",
          "id": 1
        },
        "spaceId": {
          "type": "int64",
          "id": 2
        },
        "addTime": {
          "type": "int64",
          "id": 3
        },
        "adminId": {
          "type": "int64",
          "id": 4
        },
        "score": {
          "type": "int32",
          "id": 5
        },
        "eventId": {
          "type": "int64",
          "id": 6
        },
        "verifyName": {
          "type": "string",
          "id": 7
        },
        "number": {
          "type": "string",
          "id": 8
        },
        "userInfo": {
          "type": "UserInfo",
          "id": 11
        },
        "draftUser": {
          "rule": "repeated",
          "type": "DraftUser",
          "id": 9
        },
        "liveInfo": {
          "type": "LiveInfo",
          "id": 10
        },
        "isVote": {
          "type": "bool",
          "id": 12
        },
        "ranking": {
          "type": "int32",
          "id": 13
        },
        "orderNumber": {
          "type": "int64",
          "id": 14
        },
        "voteNumber": {
          "type": "int64",
          "id": 15
        },
        "lastScore": {
          "type": "int64",
          "id": 16
        },
        "isVoteH5": {
          "type": "int32",
          "id": 17
        }
      }
    },
    "EventInfo": {
      "fields": {
        "eventId": {
          "type": "int64",
          "id": 1
        },
        "eventName": {
          "type": "string",
          "id": 2
        },
        "editTime": {
          "type": "int64",
          "id": 3
        },
        "adminId": {
          "type": "int32",
          "id": 4
        },
        "adminName": {
          "type": "string",
          "id": 5
        },
        "beginTime": {
          "type": "int64",
          "id": 6
        },
        "endTime": {
          "type": "int64",
          "id": 7
        },
        "eventInfo": {
          "type": "string",
          "id": 8
        },
        "eventUrl": {
          "type": "string",
          "id": 9
        },
        "eventPicUrl": {
          "type": "string",
          "id": 10
        },
        "eventPicForwardUrl": {
          "type": "string",
          "id": 11
        },
        "shareUrl": {
          "type": "string",
          "id": 12
        },
        "eventInfoList": {
          "rule": "repeated",
          "type": "EventInfo",
          "id": 13
        },
        "voters": {
          "type": "int64",
          "id": 14
        },
        "onLineCount": {
          "type": "int64",
          "id": 15
        }
      }
    },
    "DepositRefund": {
      "fields": {
        "refundId": {
          "type": "int32",
          "id": 1
        },
        "refundNum": {
          "type": "string",
          "id": 2
        },
        "spaceId": {
          "type": "int64",
          "id": 3
        },
        "spaceName": {
          "type": "string",
          "id": 4
        },
        "userId": {
          "type": "int64",
          "id": 5
        },
        "userName": {
          "type": "string",
          "id": 6
        },
        "refundAmount": {
          "type": "double",
          "id": 7
        },
        "refundTime": {
          "type": "int64",
          "id": 8
        },
        "refundDetail": {
          "type": "string",
          "id": 9
        },
        "refundStatus": {
          "type": "int32",
          "id": 10
        },
        "adminTime": {
          "type": "int64",
          "id": 11
        },
        "adminDetail": {
          "type": "string",
          "id": 12
        },
        "bankCardId": {
          "type": "int32",
          "id": 13
        },
        "depositRefund": {
          "rule": "repeated",
          "type": "DepositRefund",
          "id": 14
        },
        "userBankCard": {
          "type": "UserBankCard",
          "id": 15
        }
      }
    },
    "FreightInfo": {
      "fields": {
        "faId": {
          "type": "int64",
          "id": 1
        },
        "templateId": {
          "type": "int64",
          "id": 2
        },
        "areaInfo": {
          "type": "AreaInfo",
          "id": 3
        },
        "firstUnit": {
          "type": "double",
          "id": 4
        },
        "firstPrice": {
          "type": "double",
          "id": 5
        },
        "addUnit": {
          "type": "double",
          "id": 6
        },
        "addPrice": {
          "type": "double",
          "id": 7
        },
        "pinkageType": {
          "type": "int32",
          "id": 8
        },
        "goodsNumber": {
          "type": "int32",
          "id": 9
        },
        "orderAmount": {
          "type": "double",
          "id": 10
        },
        "freightList": {
          "rule": "repeated",
          "type": "FreightInfo",
          "id": 11
        }
      }
    },
    "ProductFreight": {
      "fields": {
        "templateId": {
          "type": "int64",
          "id": 1
        },
        "templateName": {
          "type": "string",
          "id": 2
        },
        "areaInfo": {
          "type": "AreaInfo",
          "id": 3
        },
        "deliveryTime": {
          "type": "int64",
          "id": 4
        },
        "pricingType": {
          "type": "int32",
          "id": 5
        },
        "pinkageStatus": {
          "type": "int32",
          "id": 6
        },
        "spaceId": {
          "type": "int64",
          "id": 7
        },
        "selfService": {
          "type": "int32",
          "id": 8
        },
        "deliveryHome": {
          "type": "int32",
          "id": 9
        },
        "freightInfo": {
          "type": "FreightInfo",
          "id": 10
        },
        "productFreight": {
          "rule": "repeated",
          "type": "ProductFreight",
          "id": 11
        }
      }
    },
    "SpaceFreight": {
      "fields": {
        "templateId": {
          "type": "int64",
          "id": 1
        },
        "templateName": {
          "type": "string",
          "id": 2
        },
        "spaceId": {
          "type": "int64",
          "id": 3
        },
        "templateStatus": {
          "type": "int32",
          "id": 4
        },
        "freightInfo": {
          "type": "FreightInfo",
          "id": 5
        },
        "spaceFreight": {
          "rule": "repeated",
          "type": "SpaceFreight",
          "id": 6
        }
      }
    }
  }
}