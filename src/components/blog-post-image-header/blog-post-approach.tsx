import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <div className="row">
      <div className="col-sm-8 col-sm-offset-2">
        <h5>A new approach</h5>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
            voluptatem sequi nesciunt.
        </p>
        <p>
            Dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo 
            voluptas nulla pariatur
        </p>
        <blockquote>
            “User engagement and experience has become a major focus for any web-based 
            service in recent years”
        </blockquote>
        <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            <a href="#">as evidenced</a>, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo 
            voluptas nulla pariatur
        </p>
        <h5>So where to from here then?</h5>
        <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo 
            voluptas nulla pariatur
        </p>
        <hr/>
      </div>
    </div>
  );
};
