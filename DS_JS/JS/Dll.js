class DoublyLinkedList {
  head=null;
  data;
  next;
  prev;
  constructor(data){
    this.data=data;
    this.next=null;
    this.prev=null;
  }

  addNode(data){
    var newNode=new DoublyLinkedList(data);
    if(this.head==null){
      this.head=newNode;

    }
    else{
      var current=this.head;
      var prev=this.head;
      while(current.next!=null){
        prev=current;
        current=current.next
      }
      current.next=newNode;
      newNode.prev=prev;
    }
  }
  display(){
    var current=this.head;
    while(current!=null){
      console.log(current.data);
      current=current.next;
    }
  }

  removeDuplicates(){
    let curr1=this.head;
    while(curr1!=null){
      let curr2=curr1.next;
      while(curr2!=null){
        if(curr1.data==curr2.data){
          if(curr2.next==null)
          {
            curr2.prev.next=null
            break;
          }
          curr2.prev.next=curr2.next;
          curr2.next.prev=curr2.prev;
        }
        curr2=curr2.next;
      }
      curr1=curr1.next
    }
  }


}

var obj=new DoublyLinkedList(1);
document.getElementById("insertBtn").addEventListener("click", function(e)
 {
    
    var input = document.getElementById("Create").value;
    input=input.split(" ")
    for(let i=0;i<input.length;i++)
    {
        obj.addNode(input[i]);
    }
    obj.display();
  }
);


document.getElementById("removeDupBtn").addEventListener("click", function(e){
  e.preventDefault();
  obj.removeDuplicates();
  obj.display();
  
});
