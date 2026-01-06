import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewService } from './view.service';
import ViewSchema from '../../schemas/View.model';
import { View } from '../../libs/DTO/view/view';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: View.name, schema: ViewSchema },
    ]),
  ],
  providers: [ViewService],
  exports: [ViewService],
})
export class ViewModule {}
