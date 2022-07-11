<template>
    <div class="wrapper">
     <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
         <li>5</li>
         <li>6</li>
         <li>7</li>
         <li>8</li>
         <li>9</li>
         <li>10</li>
         <li>11</li>
         <li>12</li>
         <li>13</li>
         <li>14</li>
         <li>15</li>
         <li>16</li>
         <li>17</li>
         <li>18</li>
         <li>19</li>
         <li>20</li>
         <li>21</li>
         <li>22</li>
         <li>23</li>
         <li>24</li>
         <li>25</li>
         <li>26</li>
         <li>27</li>
         <li>28</li>
         <li>29</li>
         <li>30</li>
         <li>31</li>
         <li>32</li>
         <li>33</li>
         <li>34</li>
         <li>35</li>
         <li>36</li>
         <li>37</li>
         <li>38</li>
         <li>39</li>
         <li>40</li>
         <li>41</li>
         <li>42</li>
         <li>43</li>
         <li>44</li>
         <li>45</li>
         <li>46</li>
         <li>47</li>
         <li>48</li>
         <li>49</li>
         <li>50</li>
         <li>51</li>
         <li>52</li>
         <li>53</li>
         <li>54</li>
         <li>55</li>
         <li>56</li>
         <li>57</li>
         <li>58</li>
         <li>59</li>
         <li>60</li>
         <li>61</li>
         <li>62</li>
         <li>63</li>
         <li>64</li>
         <li>65</li>
         <li>66</li>
         <li>67</li>
         <li>68</li>
         <li>69</li>
         <li>70</li>
         <li>71</li>
         <li>72</li>
         <li>73</li>
         <li>74</li>
         <li>75</li>
         <li>76</li>
         <li>77</li>
         <li>78</li>
         <li>79</li>
         <li>80</li>
         <li>81</li>
         <li>82</li>
         <li>83</li>
         <li>84</li>
         <li>85</li>
         <li>86</li>
         <li>87</li>
         <li>88</li>
         <li>89</li>
         <li>90</li>
         <li>91</li>
         <li>92</li>
         <li>93</li>
         <li>94</li>
         <li>95</li>
         <li>96</li>
         <li>97</li>
         <li>98</li>
         <li>99</li>
         <li>100</li>
     </ul>
        
    </div>
</template>

<script>
import Bscroll from"better-scroll"
export default {
    data(){
        return{
            scroll:null
        }
    },
    mounted(){

        // 在created() 函数中是无法获取到HTML标签的，所以在created() 函数中better-scroll 是无法使用的
        // 在创建better-scroll 实例时，可以传入第二个参数，该参数是一个对象，该对象中的各个属性可以对bscroll 进行一些设置
        // probeType （注意大小写），用于确定是否监听滚动，可以传入三个值
        // 0 默认值，不监听
        // 1 设置不监听
        // 2 设置监听
        // 我们在设置监听之后，可以使用bscroll 实例的on方法，设置监听
        // 该方法有两个参数，第一个参数设置监听什么事件，第二个属性是一个回调函数，当第一个参数中设置的事件触发的时候，该回调函数就会执行



        this.scroll = new Bscroll(".wrapper",{
            probeType:3,

            // pullUpLoad 属性用于设置是否开启底部监听，开启之后就可以监听当滑到底部的时候就能触发预定函数，我们就可以在预定函数中执行加载更多
            pullUpLoad:true,

        })
        // 监听滚轮滑动
        this.scroll.on("scroll",(position)=>{
            console.log(position);
        })
        // 监听滑到底部，注意该事件默认只能触发一次，想要多次触发需要我们在回调函数中调用 
        // 实例名.finishPullUp() 方法，结束当前时间，才能进入下一次对下拉到底事件
        this.scroll.on("pullingUp",()=>{
            console.log("上拉加载更多");
        })
    }
}
</script>

<style scoped>
    .wrapper{
        height: 150px;
        background-color: #bfa ;
    }
</style>