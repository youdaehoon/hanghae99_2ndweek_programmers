
import{collection, getDocs, addDoc, query,getDoc,where } from"firebase/firestore"
import { db } from "../../shared/firebase";




// 액션 타입을 정해줍니다.
const CREATE = "post/CREATE";
const LOADN="nick/LOAD";
const LOAD = "post/LOAD";
const DELETE="post/DELETE"


// 초기 상태값을 만들어줍니다.
const initialState = {
    user:{
        id:'여기에 아이디가 들어갑니다.',
        nick:'여기에 nic가 들어갑니다.'
    },
    
    list:[
   {        id: 'sjssmsqkqh1@naver.com',
            text : "돈 많이 버세요!",
            img  :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5d7jcPWuyY9dvTyIPo8aJFyh5cC5PH3GK_snQKuyZw&s=36",
            date : "2022-07-15 05:35:29",
            nic :"야발",
            type:"1"
    },
    {   id: 'a@a.com',
        text : "하늘좀봅시다..!",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUZGBgYGBoaGBgaGhgYGRgYGBgZGRkYGBgcIS4lHB4rHxgYJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs2NDQ1NDQ0NDQ0NzY0NDQ0NDQxNDQ0NDQ0NDQ0MTQ0NDQ0NDQ0ND00NDQ0NDQ0NDQ0NP/AABEIAJkBSgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAABAgMEBQAG/8QARhAAAQMCBAIGBgYIBAYDAAAAAQACEQMhBBIxQVFhBSIycYGRE0KhscHwM1JicrLRBhQ0c4KSwuEjQ3TxFWOis8PSJFOD/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEAAgICAgIBBAIDAQAAAAAAAAECEQMhEjEiQVETYXGRBKFCsfEy/9oADAMBAAIRAxEAPwBJXLly9o4DlyATQgANCeCg0qZ9MwDx0SGICr2AcyQHAEbyYVOmwyLLV6EwrHvIfcbXUTaSHFbPZ4CjSIaWNb3haYWZg8MxjRksrIxR3Xmy2zqXR1V17o+kEKpiK0lQCqigssVWZzZF7MohRtqKOs8lAhXyUrrKzRMiElWjGqYFGqVRrPV3EBZOIqxqtIqyGw06x3KlOIhZ36wIzTAVDF4/McrCtFByZHKi/wBJdLFgtqdF2B6aaYzgi2sLzuIfBId1j7lJg8QGAk3zCw4Lb6S4k8nZ6XE4pz2uNNst2I1JXkOkqb2uOYQTeFZqdIvZZji0HZZteo55LnGSdSVeODiKUrIUqchCFqSKmXQuQMVMuXKgCCmCULgpAdcgigALkVyoALgiuQBy5GF0IGcuhGEUCNZcuhFQIARXIFAHSmDlHKZAFik+CruHfkvaTus2m64U1avJtYDQKJRsaZ67o/pUOhntWoTOi8Hgqjs4y6zZe46Hc5zMztdOVlyZoKO0bwlYH0yolexDgqTisUUx2PXBpcVGnpvhFAW6IDQq2JxBUVfELPrYhNRsHIlcS5Y2PpuJyhS47Eua3qmCqGHxnrPNwtoQa2ZSl6KGMw75LSezss4uhaeOxwJdG6zgAQuqF1szZXcSUCSpCI5qMrQkWUrkyCAEhAhOlIQMCCJCEKgOXIoQgDlwRhcgDgmCACZo5/FS2kOgIqQ5dpPkPYlI+fko5fYdCwjCAa7iP5T/AOyYA8fZ/dO/sAIRRRDiErYBLI1ty38tkkIrkUFmsVyaECEiQJSmQKAFXJkqYhlwKVEJAXcBVDXdYSCvRYbp5jG5QF5MGFxcVnLGpdlqTXRv1+ny4m1lw6UmLrzpKGZL6MfQc2exw2MBAEqapioXjKOJc0yCrlbHl3iFnLBsamalfH3VOrjJFisd9Q8VC554q1hSE5F/E4+QqD6p10QpiTddVZqQtFFLRN2R1Hkm64aJCulWIDykKYoIAWF0JoXQgBISkKQhCEARwhCeF2VUAkIwnAXQgYkLjZSBh124oOapcvSGl7ZGJ7uX5/l70wCfKuhCSQ2wQmAXIoJBCMLl0KgOhdCMLkAKuRhdCANghKnKCgQiCeECEAKlhPC4hFgJCIRK5AAKBKKVFAAoEJoXZUxCIymyoZUARuKQqfJZJlQBG1q16HRjiySbGPJL0TgPSOObsj2rfNN8gizQIjuWGSdOkaRj7PG4ymGvIGgVfKt3ppjcwgX3KyXtC0jK0mQ1TK8LoTkLoViI4QhSELoQBHC6E8I5UARZUYUoYjlQMhhEAb+XzopSI4c+A/M8vPgkIJ0HifmVDlekUlQhC5rd1MaRAk76WhBwlO/SD8kULoUoYTb+yQs5qkwoUBGEMvM+xEA8fYnYgrkUUwBC4hFck2AkT3e1dkCeF0IoLNchBNCDrCVAhCuhFjf7/kEYSuxigJSFIQlITSFYhQhMQuhMQkIwnyowiwEchCeF2VACQgnLUsIABQhSKRlOYDQSUrAlwuILRAMDcq27pdwGUDxRpdDkNzveGg6DUnn3KnjKYaYYSRusPGT0abS2VcVWLjJKqOVx7nnUuPfJ96j9GTt7IWqdEFUtQhWDSdw8dlLQwDnxG6rmhUylCdlFzpIBMarcw/QBsXmG7r0GBwVNjcjBrczfzWUs8Y9bNI42zwIYnbTJ2Xr8f0c2TkYCb3iwWZhuiKvhy359yFni1YODsxW0yTAElLkO09457N/Py4j2HRHRjHyRemdXf/aeDf8Alc/X+72tEYSm95cQDkMNA3cNTA4afzLCX8hN16NI4zwz+j3tbL2kAaA6AbQFL/w14aHEWcJC9jjsMHmCBl3nXugJH085yNcIaR6Q7NgSGAcbg/7o+vS0g4b7MGp0U30TS4w8wACdJOnxUWL6Lp0mdqXHfZeipUmyXxZvVbNyT6ziTcnbwWJ0ziS6WBsAakoxzlJjkkkYlZrWiGmZGqqFsaKR7I08tikzcRHtXbFV2YsARhNCMJkiQuDU8IR5+5DdDOLOY5xfwQITALoQl8gKGpvR8kzbLkAaiiBzE2s0+bv7W+QjUJAmL+q3mbCfmyZlPKAPbxO58TJWPb+wdHLimhCFoIUhLCeECExCLky4NQAq5OQgkAsK1hsC9/ZbI4oUMPmiSAF6fC12MZ1RoPMrLLk4rRpGPLs82/CFk5xtZVHM8Vv41gfB3OpWPiDllkf3U458glGisArOGqZXT58+Srl02Hjy5d60uj8LcOJHcqnJNfYUVsetjHky5pjaUzK4J7IVvpDFsy5QZKoYVwkE6LNbjdUU9Ps18NQa6CQLq8OjqYkuAUtN7WtGijNdr77bc+a5nJ+jVRRUrYGmBLR4LL/WWMNmlvslb1QTc24c1RqYRjtbkmw988lUZL/ITXwUK3S89UD54lbGBYA0ONp7ySe6LrMx+HpsMm5JAAtc8BwQodJx+ewHAJyja8QUqezZLJOgjZv58VSa8Vyb/wDx2zm39NsW3/yhufXNuzObN/X3YhzmA5aTfpHCQX/8trhp9oj7ouSW7FFkASA1o7DANI0JHyAsWi07LFd7g2W9WbNadSTYTBsN44BRtcKYDcwsNNzxMC5JVHFY0Z+sbMFoN87he/JsfzFUsR0q1otbMYHefiqjB1YnJFzE9JXysa4kRNgCJMCM0XJsPE7J2HKz0bWOF+sYBl7rk9UkmLnwWbgzLpFyDY8Xka9zW+9alDFNBc6eqwZQTvqXu87eCTiwTslqFjQACCY7J7XeQbrC6bYMotcmSr9TGMeZftcDQjhBFwd5G/csPHYl7idXN20zAc9j7PFb4YvkmyZNUZpauyqQ+PkUXERYeK7rMCGEQwp4UdV5Fhdx0HxPIJOVAK6NJ63dYczddlhPTpQNeZO5KYpRAQhcAmhGFYrBC6E0JsqVgWpzP5M/G4fBp/6lKlw9PK0Tqbu+8bn2lSwso3Vv2NiwoS8nsxG7jp3Ab+73Ig59Oxx+tyaeHPy4qbKmm3+B9CgDe3t9iLaObs9Y8N/Ab+CDuCjyS+fqi3edT5R5od+mGvYXNhc1u67G4k6m7o31McTue9LTqAiNxcg6jw4c9EnJvx9jUV2O53ABRkpoRhUlXRLYWlN6YyGg23+fnRLCRj7k+A7hYnzlZ5ZUq9suCt2Xn4sknhoAs97yTA13PD8z898hZsDtc8J+PLx7wQBYfPMlTClpBJt7YGtAHz70TVjSfnvU+FwT3nqidp2C2h0CwCXvJI2GknshOU4rTJUW+jAaeOvzwTlx0m3L81Pi8EWPy680tLBOeYb58BufOybkqsKd0Tt6QkBpuB7TwVlnSwHqqZnQ7Gth9iBpP/UszH4UU+tm10bw71jcJaLqSHr9JvkuJ8OHABCl0iWjMRLzYcAFjipmObYGB9o7x88VM3z9qvjF9E20SGoS7MTJnVVMXi3CGNBzEScsZg3kTYOOgJIA14AxVccZDacFx0cbsEetbtAW5XFzopMHQyiZLpMl7tXuHrE6ADYaDyU2pPjHr5HVK2aXRNN/VzuFJjezTZrA0zPcLnuAI4q1jukGsBLM0DWXPOY8DJMlZr3yLqGp2mtJsBnPM+qPO/8ACm8SWw5tllxjiZvfibmfFZ3pczy7ZnVbzef9/aeClxVbK0n/AHPcq4ZEMGouT9p3aPkT/NyTeqj8C+5cpYgsb1Tc9Vp77uf7z4BMzFHsg9UHzIsB7JVV1UAF8THVZzOlvG3gnZSjq7N9rt7p0rHZZdUJUZeUbotbK1SSJOpUnPMNBPdey0qf6P13NzZQBE3N/Jen/R3Atp0gS3ruubXvoFeqVmwXkgMbedrauJ4Dbz4Lmn/JadRNY4k1bPHv/Rt7WBzngOIEM3Ljowc/nQKPE/o0+mzPmD3R1o07mcQOO63XtL3elfYf5bDq1p1c/wC0eGwtxQqYouEErOOWbdjcIni3sIMEQUuVeqxvQzHODg+51WV0rgmsMt0+K7I5VKkjKUGjLDF2VObapG9biB5F35BVKdaXZKRBicS1jXOPZbqRck6BrBu4myzf1LFO63pQyb5LnLN8s7xp4K7hx6Z+f/LYYp8HvFi/uGg8VorDjz2zS+OjQKrE59Oxx+v3fY9/d2hSa6oAXWZqGnV97F/2fs778FZeLjv+B/NWny/H+yevyANQeY+A4lSQq5dNxv1W927vZ5AcVTdCOFgT8n5KZjbX13TBs9w08N0HujTX4oToRWewOcRPZAnxUj6YNj4HccwRcJKdi46mQO8xf3qw1kfFStlN+kRBhGhzDnY+Y1+bozxt3/nopYXFWtEFapXa0EyDykKGwAAdL3cdGibkn4byoeka4jLeSbjjFw32SfFT4CkYzPuXG5000AGwXDKTyZKX/DpSUYkrGkWvHGIJPE/PkrmAwJJkCWzN9u5ROIEceCno1yy4MRsurjUdGN72emwVJrNBA3uVAzEy4uvlmeNzYeQ96o4npUNYGtEkw2e/U+9SNxrCA33a+HNcri7to25L0djwx/Xkkts0cXHQeaNGqKDQCJcdI3PDuVStXLnjKA0M7Id1i55loJa0xGvrKDGvAIa57n1HC5acjabdyI6w4AZik2KvZBjOkHPJc50AHWYE8AeA9qzsVjM1gS4m0gE25HTW2qt16bGdZoA5mJPjr5qrgTmc17gesbDQk3iD6ojfWMxgaq3KqUVsjvssUuj3BtqZc4AZaWYDK0mxe4Bwa20km5iwOinx+GZRZmrODnu0pskN17I9Z+ouYBMQASFqv6Vp4dkAZiTMNEZ3kbTvbUzYSTqV5b9YdWrCo8jM4S2CS1rQJDWjjuCbwCfWIGTlOXiapRirJBgmtPFzvpHbEjSmz7DZM8STxIUzHFtwNdeBjjxCsPdbu8oXCnm3At48gF2QSjGmYO5O0V3NGZp2zXHAZb+V/JQUnF8vPrnMBwboweUKbHYUZA2e29tNoH1QRnceQEjvKXE5mB1uMR9VguY2CyeSKk230VxdaKGJcS+NWtknSLRbzI8kM+SACSXgQTOpEnxFzzACVtOSG+s49fllMkfzE+SGLIcXOBsAGtv603ynbQX5WUKW+TGl6JKj9GsuRZo5xd3hb2q01haIkQB8yTqqeGcQ7K4Q5ogc+fkQPEq7pBdc8NvJbY29yYpL0c15mOPGxW7+jmEL354GVthO7jw7lk0KGe5EHhqI57helpYpuHo6iYG+50HL4QUsuTxocY7svvxfWLJjLd5mOrwB53HgeSzK2N9K+Ziiw2b9d7dz9lp24jksjE4wvORhMnrPfoQDq7k50Q0eqBOoCjrYiIYwQAAIGjBFoHwXPGDkzRyNbFdI5rKr6Qniq2Eifedz4q9nZELbjx0Tyshfisoss7FY2RLnWHzZS4l7WyZ/vyHNVGUyTmd4N2bzPFy1iq0uzOUiJpDoLoA1DZHgXc+Wyr4x5qO9CwmCP8Rw2YfUHN3ulWcXWLYYwS9/ZGwG73cAPmdE+FwoY2Bcky5x1c46uKb+P2wWt/ompNa0BoENaAABoANAjCIaeKb0ZV6EXGiB3BcxhJ0M8NYC1DTY8WaGwBl2k/WPJW61RlCmXWGVpLiNYAueaweZJFrG2earXIZe93bENGvdOnnwSsMuPBoy+Op+A8CrtPEZKb8RUbme+7Wnu6jbbCYniTxVR7w8NAbDG3OgzuNy5x5m8LOOZykEoqKCb8h70lI5nSNG2j7W58veo8SHFuaYA290FRU8PDWgTL7kyZI1cRwF48QtXIlLRNhBOZ2suOWOHHxhWYT9HYU5A4iABpoI3vyWm2nSEdRzj3EifghZFFbDg2ZEKnjMU1rXcACXO2aBr3mDpzWviB6Zxa0BjWWL9sw1Y0bkbnbv08/Xy1HlkhtKmTmM9pzetHMC5PExwKyy57jS9lRhT2UsAxz3Go8QB2QdY1l3M+yI2WuxxIlo137+A3VHBtzRmsCczW95nrDhstRgl0D1de88PD3owwpaHNjNpxt4ndR1HdZre93g3+5ClyEyY6o+SVQdWdne4CYAY2OQl0ed+5dEpqKMqtljOS5xNmtEd7jrHhAUT6obJmCRc8G8uenyFGwyGscQ2ZLoM9UCSTbaw/iCgeS45z1Wkw0H6okl3K035rB5SnGiVmKyMNQzJ0G4EWaOcBLh3uMkDruEuP1QdByHyAVC5npXGWuDGcLRyH2iNSfDirxc2mwkNjg3mbNHMpLy8npIb0inXol7wyS7KQXunQkGGgdwJVlzw106BgDWgalzrkAcQ0N/mKiw9VtJrnPOkk7lzvWIG+kfwp2OLAHvANR2bK31WF1yTxygiTyAHOIypOXz/Q0vkrYipmfkMFwbL98rTowDeYJcdxA3Vt1A5BeX9rN9vUeG3cocM4mGtcDHWJIky42mNbiTtIhaVGg9zoF3OFp0H5J4nVyfYS26IDUzNbAu7LbheTPkVeY2waGyZ6xGotMRtP5q/hsD6MNfAc7MddC7K4ADxMm1gCqnS2MFCk5xAEg5iNXuPu5eCWTPoqOOjLrVM+d7TamzKBpDiQ95B4WaPBT1wMrSXwH7AR1Gy9zjMmTlHmFRqMHojTZJe8tJJtmc8y43PEnkoMS52RxLpIYymNID6gBIA5DKuZeTst6RUwdcmm57h1nG0WPWccrfFxPgCmp05MusymM08XRaeMC/e5QuqBocQDA6o+99Gxo5wD/MVoublYyluSC4zM3BcZ77eCpaVkssYalDBnu5xzHjKNENDpMWNp0ceXIcOKjxFQ5Ord7yQ1ukDN1jOwA37kGtDWgvMnQRYADTK346rsj/AOUiW9lupiTNrRckez2qniq7uq89aTDGT23m5eeQjyBKhxb8wyggAjM8zGRrbkT3QO8rmVDnDi2HFhDG7MZaM0aHj4DZZ2pMGmtF2nLBlBl7us93En1j7gOQUjWgWE3ufiUmHYGgnNO7to8EzSdYudRwGy6UqIbJmkDb2qGtVyifLck7ADcpnvAEn3XPIDdLTpknO7XYfVH5802/SFZGxhJzOidh9X8zzSYrE5Ya1uZ7uyzu1c4+q0bnwEmyXEYwyWUwHP3nsMnd5Gp4NFzyFxLg8HlJNy5xl7j2nkaTwA2aLBK6VL9jr2xMJSDASTne49d+l/qgbNGgCtNYYuVcw2CaRnccrRp88TsFdo9HMF3PMnRp2GwPErP6iWiuLezIFPca+9NnHPyK0xhGyA2de9N+pO5KvqRFwZYawtGd5gctp2WN0jiTUeRI9GyHvMiBluxhvrfMR91aPSOlPx/pWU3sVv8AVf8AkauCcmbojfme9rnEhsBzWwRYzkzDvDnRyVloB102HE8Shie2/wDdj8ATjfvW+COmYy7IzhXVeoCMrWibi73ECLcN+9SPonrPDh1i5jInsUyQ53i+RzgKPor6M/vh+JXj2z9xv43KJZHdGiiierTIY1g3gEblou6TwgR4oOe+oCxktYCQ94tJHaYw7QbFw00F7iap2n/cd/So6X7FT/dU/wAIRJ7GYvS3SuRopUozEQ2B1WNGr44Ae2OKoMwwYG0gJcbvO5B60E+/iXJ6v7TW/dfFquD9of3u/EFmnylsER4dty9/Zgxa0M1+KmonKzM7tOvzl2g8BHkq+K+iH3HfhT1O3T8fwrtTpGD7GfinlpBhrGyMp1MCczvAiyysPX6jWxBfJLtmsPWM8zp5Kzj+xU/dfB6y+kPoz913vasMrr9FIf0/XkiRq37Q9URzJza6ESg9z3uzuBIaQ1rSOq95uBxLRrsLaIYb6T+H4OV7Adun3u/AFz4/Lv5LZdoUgxsEiO07YSbnXmqOPxoLxlvl7A+s8gR4CRfmtHG6D74+CxMF9I/74/8AIt/5EmkkiIbey5WoNp+jznO9wlxOjWi+UcGzAJ1M9wSUiahNV8hmgkXyi9hxJE+XBQ9N9s/cf/Qr7exS+9T/ABrFvycfS/sv4JsPhXMLnObDslN2Um8PdUgkcsseC1ejmPJtYRc7nv5clJ0n+0P+7T91RDGfsz/3fwXTF+BLXkQ1MfmeIe0kDqsBaMo3e87TaAsvH0zVfRa52YkuqFo7LWM7OvF2Ukngq/RP7L88FV6M+nd/pnfiauOW6NUTPquc8OzetIOkBrQBbh1wsZ+IzMYGOnIX1HTxb2Wgbmw9it4/sN+6/wDFTWDgP6T/ANympk+kDN7ozCkmmHgkUwaj+BeesczuXFS08Uc+cNzQ2w4knK0Dxz+xQ4T1/v8A9blfxnbpeH4nLVeiRcNLGVKjruPVBGgy6hv8RPetp/Q2VjM7v8R4hrREMaBLjPIak7lZdHs4f7zfevQ9Odp3+ld+F60yScdIUN9nkCGve+qG/wCCx4DAZl+VwlxjZt3Hm7iFrUmAOe9xGoE7aA281SwH0H/4O/7j1Nhf8j+L8AVYOkKS0SVBncAAWjUmOsRsMvtvw0VpjGgEvGlyXB0eFrdwT/5g+fVam6V0Z+9p+8raU2rJSGwFFo/xXta2JyiwyCLlx+sR5acVl16rqpikC1n1xYuAtDBsLRmPhKk/S36M/wAH4lPQ7R+6z3LHm7NEtEWF6OLCA1rYcJuQI4mTqe/Xir1erSZDGkvedWxcD3R9q4Rp6nwVKnq/9+z8LVEssr4oqMEzbo0JAcesdgOy3u580wwuY9ew9qm6L7B+873qXEdofe+Cu9CojIFJs/2LRzO6zP8Aj9Pg88xTJB7jF1H+kXZf3D8QQfqe9Q2M/9k= "
        ,
        date : "2022-07-16 07:35:29",
        nic :"메롱메롱",
        type:"2"
},
]}
        


// 액션 생성 함수예요.
// 액션을 만들어줄 함수죠!

export const createPost = (post) => {
    console.log("액션생성함수",post)
return { type: CREATE, post };
};
export const loadNic = (nic) => {
    let user=[];
    nic.forEach((v)=>{
       user.push({...v.data()})
    });
    user=user[0]
    return { type: LOADN, user };
    };
export const loadPost = (post) => {
    console.log("여긴됌ㅁ?")

    return { type: LOAD, post };
    };
export const deletePost = (post) => {
    
    console.log("딜리트 포스생성완료!")

    return { type: DELETE, post };
    };



// middlewares
export const loadPostFB=()=>{
    return async function(dispatch){
        const post_data= await getDocs(collection(db,"post"));
        
        

        let post_list=[];
        post_data.forEach((v)=>{
            post_list.push({...v.data()})
        })
        console.log("여긴됌ㅁ?",post_list)
        dispatch(loadPost(post_list))// 스토어에 넣는다

    }
}

export const createPostFB=(post)=>{
    return async function(dispatch){
        await addDoc(collection(db,"post"),post);
    }
}
export const deletePostFB=(post)=>{
    return  async function(dispatch){
        console.log("date가 나올듯?",post)
        const user_docs=await getDocs(query(collection(db,'post'),where("date","==",post)))
        
        user_docs.forEach((v)=>{
            console.log(v)
        })
        
        // await deleteDoc(doc(db, "post", "DC"));
       
        dispatch(deletePost());
       
    }
}


// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
case "post/LOAD":{
    console.log(state)

    return{...state,list:action.post};
}

case "post/CREATE":{
    console.log('먹히냐고')
    // console.log("스테이트확인 크리에이트",state)

    console.log("액션은",action.post,"state는",state)
    const new_post_list = [...state.list, action.post];
    return { ...state,list: new_post_list };
   
}

case "nick/LOAD":{
    console.log("nick를 로드해보자!",action.user)
    return {...state,user:action.user};
}
   

default:
return state;
}
}