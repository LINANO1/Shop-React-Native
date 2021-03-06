/**
 * ShopReactNative
 *
 * @author Tony Wong
 * @date 2016-08-13
 * @email 908601756@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */

'use strict';

/**
 * action 类型
 */

//公用类型
export const kActionError                       = 'kActionError';

//首页
export const kBannerList                        = 'kBannerList';
export const kBannerListReceived                = 'kBannerListReceived';
export const kHomeListArticles                  = 'kHomeListArticles';
export const kHomeListArticlesReceived          = 'kHomeListArticlesReceived';

// 用户
export const kUserFromSync                      = 'kUserFromSync'; //同步加载用户数据, 一般从缓存加载
export const kUserRegister                      = 'kUserRegister';
export const kUserRegisterReceived              = 'kUserRegisterReceived';
export const kUserView                          = 'kUserView';
export const kUserLogin                         = 'kUserLogin';
export const kUserLoginReceived                 = 'kUserLoginReceived';
export const kUserLogout                        = 'kUserLogout';
export const kUserLogoutReceived                = 'kUserLogoutReceived';

//商品、商品目录
export const kCategoryListWithProduct           = 'kCategoryListWithProduct';
export const kCategoryListWithProductReceived   = 'kCategoryListWithProductReceived';
export const kProductView                       = 'kProductView';
export const kProductViewReceived               = 'kProductViewReceived';

//文章
export const kArticleView                       = 'kArticleView';
export const kArticleViewReceived               = 'kArticleViewReceived';

//购物车
export const kAppCartCookieIdFromSync           = 'kAppCartCookieIdFromSync'; //同步加载数据, 一般从缓存加载
export const kCartNumFromSync                   = 'kCartNumFromSync'; //同步加载数据, 一般从商品详情页
export const kCartView                          = 'kCartView';
export const kCartViewReceived                  = 'kCartViewReceived';
export const kCartAdd                           = 'kCartAdd';
export const kCartAddReceived                   = 'kCartAddReceived';




// 食物百科actions
export const FETCH_CATEGORY_LIST = 'FETCH_CATEGORY_LIST';
export const RECEIVE_CATEGORY_LIST = 'RECEIVE_CATEGORY_LIST';

// 食物列表actions
export const FETCH_FOODS_LIST = 'FETCH_FOODS_LIST';
export const RECEIVE_FOODS_LIST = 'RECEIVE_FOODS_LIST';
export const FETCH_SORT_TYPES_LIST = 'FETCH_SORT_TYPES_LIST';
export const RECEIVE_SORT_TYPES_LIST = 'RECEIVE_SORT_TYPES_LIST';
export const SELECT_SORT_TYPE = 'SELECT_SORT_TYPE';
export const RESET_FOODS_LIST_STATE = 'RESET_FOODS_LIST_STATE';
export const CHANGE_SORT_VIEW_STATUS = 'CHANGE_SORT_VIEW_STATUS';
export const ORDER_ASC_OR_DESC = 'ORDER_ASC_OR_DESC';
export const CHANGE_SUBCATEGORY_STATUS = 'CHANGE_SUBCATEGORY_STATUS';
export const SELECT_SUBCATEGORY = 'SELECT_SUBCATEGORY';

// 搜索actions
export const FETCH_KEYWORDS_LIST = 'FETCH_KEYWORDS_LIST';
export const RECEIVE_KEYWORDS_LIST = 'RECEIVE_KEYWORDS_LIST';
export const SELECT_KEYWORD = 'SELECT_KEYWORD';
export const RESET_SEARCH_STATE = 'RESET_SEARCH_STATE';
export const CACHE_HISTORY = 'CACHE_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export const SETUP_SEARCH_TEXT = 'SETUP_SEARCH_TEXT';
export const FETCH_SEARCH_RESULT_LIST = 'FETCH_SEARCH_RESULT_LIST';
export const RECEIVE_SEARCH_RESULT_LIST = 'RECEIVE_SEARCH_RESULT_LIST';
export const CHANGE_SORT_VIEW_STATUS_SEARCH = 'CHANGE_SORT_VIEW_STATUS_SEARCH';
export const SELECT_SORT_TYPE_SEARCH = 'SELECT_SORT_TYPE_SEARCH';
export const FETCH_SORT_TYPES_LIST_SEARCH = 'FETCH_SORT_TYPES_LIST_SEARCH';
export const RECEIVE_SORT_TYPES_LIST_SEARCH = 'RECEIVE_SORT_TYPES_LIST_SEARCH';
export const ORDER_ASC_OR_DESC_SEARCH = 'ORDER_ASC_OR_DESC_SEARCH';
export const CHANGE_HEALTH_LIGHT_SEARCH = 'CHANGE_HEALTH_LIGHT_SEARCH';
export const SELECT_FOOD_TAG = 'SELECT_FOOD_TAG';

// 食物对比actions
export const SELECT_COMPARE_FOOD = 'SELECT_COMPARE_FOOD';
export const CLEAR_COMPARE_FOOD = 'CLEAR_COMPARE_FOOD';
export const FETCH_FOOD_BRIEF = 'FETCH_FOOD_BRIEF';
export const RECEIVE_FOOD_BRIEF = 'RECEIVE_FOOD_BRIEF';
export const FOOD_COMPARE_RESET_STATE = 'FOOD_COMPARE_RESET_STATE';

// 食物详情actions
export const FOOD_INFO_FETCH_FOOD = 'FOOD_INFO_FETCH_FOOD';
export const FOOD_INFO_RECEIVE_FOOD = 'FOOD_INFO_RECEIVE_FOOD';
export const FOOD_INFO_CHANGE_SHOW_UNITS_STATUS = 'FOOD_INFO_CHANGE_SHOW_UNITS_STATUS';